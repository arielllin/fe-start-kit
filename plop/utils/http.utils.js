const recast = require('recast')

const {
  exportNamedDeclaration,
  variableDeclaration,
  variableDeclarator,
  identifier,
  arrowFunctionExpression,
  blockStatement,
  returnStatement,
  literal,
  callExpression,
  objectExpression,
  spreadProperty,
  property,
  templateLiteral,
  templateElement,
  memberExpression
} = recast.types.builders

const addRequest = (ast, name, prefix) => {
  const requestExporter = exportNamedDeclaration(variableDeclaration(
    'const',
    [variableDeclarator(identifier(name), arrowFunctionExpression(
      [identifier('req')],
      blockStatement([
        variableDeclaration('const', [variableDeclarator(identifier('serviceApiPrefix'), literal(prefix))]),
        returnStatement(callExpression(
          identifier('request'),
          [objectExpression([
            spreadProperty(identifier('req')),
            property(
              'init',
              identifier('url'),
              templateLiteral(
                [templateElement({ raw: '', cooked: '' }, false), templateElement({ raw: '', cooked: '' }, false), templateElement({ raw: '', cooked: '' }, false)],
                [identifier('serviceApiPrefix'), memberExpression(identifier('req'), identifier('url'))]
              ))
          ])]
        ))
      ])
    ))]
  ))

  ast.program.body.push(requestExporter)
}

module.exports = {
  addRequest
}
