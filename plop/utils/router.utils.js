const recast = require('recast')

const {
  importDeclaration,
  importDefaultSpecifier,
  identifier,
  literal
} = recast.types.builders
const TNT = recast.types.namedTypes

const editImport = (ast, path, name) => {
  const fileImport = importDeclaration(
    [importDefaultSpecifier(identifier(name))],
    literal(path)
  )
  const index = ast.program.body.map(it => it.type).lastIndexOf(TNT.ImportDeclaration.name) + 1
  ast.program.body.splice(index, 0, fileImport)
}

const editExport = (ast, name) => {
  const index = ast.program.body.map(it => it.type).indexOf(TNT.ExportDefaultDeclaration.name)
  ast.program.body[index].declaration.arguments[0].properties[0].value.elements.push(identifier(name))
}

module.exports = {
  editImport,
  editExport
}
