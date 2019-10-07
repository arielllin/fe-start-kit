const recast = require('recast')

const {
  importDeclaration,
  importDefaultSpecifier,
  identifier,
  property,
  literal
} = recast.types.builders
const TNT = recast.types.namedTypes

const addImport = (ast, path, name) => {
  const fileImport = importDeclaration(
    [importDefaultSpecifier(identifier(name))],
    literal(path)
  )
  const index = ast.program.body.map(it => it.type).lastIndexOf(TNT.ImportDeclaration.name) + 1
  ast.program.body.splice(index, 0, fileImport)
}

const editExport = (ast, name) => {
  const _property = property.from({ kind: 'init', key: identifier(name), value: identifier(name), shorthand: true })
  const index = ast.program.body.map(it => it.type).indexOf(TNT.ExportDefaultDeclaration.name)
  const moduleIndex = ast.program.body[index].declaration.arguments[0].properties.reduce(
    (prev, curr, index) => {
      if (curr.key.name === 'modules') return index
      return prev
    }, null)
  ast.program.body[index].declaration.arguments[0].properties[moduleIndex].value.properties.push(_property)
}

module.exports = {
  addImport,
  editExport
}
