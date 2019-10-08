// Project constructor setting
const fs = require('fs')
const cust = require('../cust.config')
const indexFilePath = cust.path.router + 'index.js'

const addRouter = {
  type: 'add',
  path: cust.path.router + '{{ camelCase name }}Router.js',
  templateFile: 'plop/templates/router.basic.hbs'
}

const addIndex = {
  type: 'add',
  path: indexFilePath,
  templateFile: 'plop/templates/router.index.hbs'
}

const modifyIndex = {
  type: 'modifyIndexRouter',
  path: indexFilePath
}

module.exports = (plop) => {
  plop.setGenerator('router', {

    description: 'generate router',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What\'s your router name?'
      }
    ],

    actions: function() {
      const _actions = [addRouter]

      try {
        const isIndexExist = fs.existsSync(indexFilePath)

        if (!isIndexExist) {
          _actions.push(addIndex)
        } else {
          _actions.push(modifyIndex)
        }
      } catch (err) {
        console.error(err)
      }

      return _actions
    }
  })
}
