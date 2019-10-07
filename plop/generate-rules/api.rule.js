// Project constructor setting
const fs = require('fs')
const cust = require('../cust.config')
const httpIndexPath = cust.path.http + 'index.js'

const addApi = {
  type: 'add',
  path: cust.path.api + '{{ camelCase name }}.js',
  templateFile: 'plop/templates/api.basic.hbs'
}

const addHttpIndex = {
  type: 'add',
  path: httpIndexPath,
  templateFile: 'plop/templates/http.index.hbs'
}

const modifyHttpIndex = {
  type: 'modifyHttpIndex',
  path: httpIndexPath
}

module.exports = (plop) => {
  plop.setGenerator('api', {

    description: 'generate api',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What\'s your api name?'
      },
      {
        type: 'input',
        name: 'requireName',
        message: 'What\'s your require name of this api?'
      }
    ],

    actions: function() {
      const _actions = [addApi]
      if (!fs.existsSync(httpIndexPath)) {
        _actions.push(addHttpIndex)
      }
      _actions.push(modifyHttpIndex)
      return _actions
    }
  })
}
