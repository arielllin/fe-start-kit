// Project constructor setting
const cust = require('../cust.config')

module.exports = (plop) => {
  plop.setGenerator('component', {

    description: 'ui component',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What\'s your component name?'
      }
    ],

    actions: function() {
      return [
        {
          type: 'add',
          path: cust.path.components + '{{ camelCase name }}/index.vue',
          templateFile: 'plop/templates/component.basic.hbs'
        }
      ]
    }
  })
}
