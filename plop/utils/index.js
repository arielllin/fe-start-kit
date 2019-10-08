const fs = require('fs')
const recast = require('recast')
const { camelCase } = require('./others.utils')
const routerUtils = require('./router.utils')
const httpUtils = require('./http.utils')
const storeUtils = require('./store.utils')

const printFormatRule = {
  parse: require('recast/parsers/babel'),
  quote: 'single',
  tabWidth: 2
}

const babelAst = code => recast.parse(code, {
  parser: require('recast/parsers/babel')
})

module.exports = plop => {
  plop.setActionType('modifyIndexRouter', (answers, config, _) => {
    const code = fs.readFileSync(config.path).toString()
    const ast = babelAst(code)
    const importPath = '@/router/modules/' + camelCase(answers.name)
    const importName = camelCase(answers.name)
    routerUtils.editImport(ast, importPath, importName)
    routerUtils.editExport(ast, importName)

    const output = recast.prettyPrint(ast, printFormatRule).code
    fs.writeFileSync(config.path, output)
    return 'modify ' + config.path
  })

  plop.setActionType('modifyHttpIndex', (answers, config, _) => {
    const code = fs.readFileSync(config.path).toString()
    const ast = babelAst(code)
    const requestName = camelCase(answers.name) + 'Request'
    const prefix = camelCase(answers.name)
    httpUtils.addRequest(ast, requestName, prefix)

    const output = recast.prettyPrint(ast, printFormatRule).code
    fs.writeFileSync(config.path, output)
    return 'modify ' + config.path
  })

  plop.setActionType('modifyStoreIndex', (answers, config, _) => {
    const code = fs.readFileSync(config.path).toString()
    const ast = babelAst(code)
    const importPath = '@/store/modules/' + camelCase(answers.name)
    const importName = camelCase(answers.name)
    storeUtils.addImport(ast, importPath, importName)
    storeUtils.editExport(ast, importName)

    const output = recast.prettyPrint(ast, printFormatRule).code
    fs.writeFileSync(config.path, output)
    return 'modify ' + config.path
  })
}
