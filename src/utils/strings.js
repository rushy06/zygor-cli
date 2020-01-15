const { snakeLowerCase } = require('../utils/helpers')
const pluralize = require('pluralize')

const mensagemFormik =
`
import validationSchema from './validationSchema';
import initialValues from './initialValues';

const onSubmit = () => {};

const formik = useFormik({
  initialValues,
  onSubmit,
  validationSchema
});
`

const getTest = type => {
  switch (type) {
    case 'string':
      return "'teste'"
    case 'text':
      return "'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta egestas laoreet. Ut in ligula quis risus ultrices interdum.'"
    case 'integer':
      return 123
    case 'boolean':
      return true
    case 'date':
      return "'2020-01-09'"
    case 'datetime':
      return "'2020-01-09 22:29:54'"
    default:
      return null
  }
}

const getTestUpdate = type => {
  switch (type) {
    case 'string':
      return "'teste-update'"
    case 'text':
      return "'Nam mollis, leo eu lacinia venenatis, sapien elit elementum sapien, non sollicitudin augue arcu ac urna. Maecenas et convallis neque.'"
    case 'integer':
      return 321
    case 'boolean':
      return false
    case 'date':
      return "'2021-01-09'"
    case 'datetime':
      return "'2021-01-09 22:29:54'"
    default:
      return null
  }
}

const getMigrationRef = res => {
  return `
      table.integer('${snakeLowerCase(res)}_id')
        .unsigned()
        .references('id')
        .inTable('${pluralize.plural(snakeLowerCase(res))}')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
`;
}

module.exports = {
  mensagemFormik,
  getTest,
  getTestUpdate,
  getMigrationRef
}
