// Project constructor setting
const cust = require('../cust.config')
const fs = require('fs')
const storeIndexPath = cust.path.modules + 'index.js'

const addStoreModule = {
  type: 'add',
  path: cust.path.modules + 'modules/{{ camelCase name }}.js',
  templateFile: 'plop/templates/store.module.basic.hbs'
}
const addStoreIndex = {
  type: 'add',
  path: storeIndexPath,
  templateFile: 'plop/templates/store.index.hbs'
}
const modifyStoreIndex = {
  type: 'modifyStoreIndex',
  path: storeIndexPath
}

module.exports = (plop) => {
  plop.setGenerator('store', {

    description: 'generate store module',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What\'s your store module name?'
      }
    ],

    actions: function() {
      const _actions = [addStoreModule]
      if (!fs.existsSync(storeIndexPath)) {
        _actions.push(addStoreIndex)
      }
      _actions.push(modifyStoreIndex)
      return _actions
    }
  })
}
