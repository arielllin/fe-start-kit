// Project constructor setting
const fs = require('fs')
const cust = require('../cust.config')
const routerIndexFilePath = cust.path.router + 'index.js'

const addView = {
  type: 'add',
  path: cust.path.views + '{{ camelCase name }}/index.vue',
  templateFile: 'plop/templates/view.basic.hbs'
}

const addRouter = {
  type: 'add',
  path: cust.path.router + 'modules/{{ camelCase name }}.js',
  templateFile: 'plop/templates/router.basic.hbs'
}

const addRouterIndex = {
  type: 'add',
  path: cust.path.router + 'index.js',
  templateFile: 'plop/templates/router.index.hbs'
}

const modifyIndexRouter = {
  type: 'modifyIndexRouter',
  path: routerIndexFilePath
}

module.exports = (plop) => {
  plop.setGenerator('view', {

    description: 'page view component',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What\'s your view name?'
      }
    ],

    actions: function() {
      const _actions = [addView, addRouter]

      // Add router index fire if it isn't exist.
      const hasIndexRouter = fs.existsSync(routerIndexFilePath)
      if (!hasIndexRouter) {
        _actions.push(addRouterIndex)
      }

      _actions.push(modifyIndexRouter)

      return _actions
    }
  })
}
