// Project constructor setting
const cust = require('../cust.config')

module.exports = (plop) => {
  plop.setGenerator('form', {

    description: 'generate api form',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What\'s your api form name?'
      }
    ],

    actions: function() {
      return [
        {
          type: 'add',
          path: cust.path.form + '{{ properCase name }}Form.js',
          templateFile: 'plop/templates/form.basic.hbs'
        }
      ]
    }
  })
}
