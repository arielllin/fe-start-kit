const actionTypeMixin = require('./plop/utils')
const componentMixin = require('./plop/generate-rules/component.rule')
const viewMixin = require('./plop/generate-rules/view.rule')
const apiMixin = require('./plop/generate-rules/api.rule')
const formMixin = require('./plop/generate-rules/form.rule')
const storeModuleMixin = require('./plop/generate-rules/store.rule')

// Default helpers is below.
// camelCase: changeFormatToThis
// snakeCase: change_format_to_this
// dashCase/kebabCase: change-format-to-this
// dotCase: change.format.to.this
// pathCase: change/format/to/this
// properCase/pascalCase: ChangeFormatToThis
// lowerCase: change format to this
// sentenceCase: Change format to this,
// constantCase: CHANGE_FORMAT_TO_THIS
// titleCase: Change Format To Thisd

module.exports = function(plop) {
  // binding custom plop actions
  actionTypeMixin(plop)

  // component generator
  componentMixin(plop)

  // view generator
  viewMixin(plop)

  // api generator
  apiMixin(plop)

  // form generator
  formMixin(plop)

  // store.module generator
  storeModuleMixin(plop)
}
