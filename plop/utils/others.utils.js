// Ensure first letter is lower case
const camelCase = str => str.split('').map((it, index) => index === 0 ? it.toLowerCase() : it).join('')

// Ensure first letter is upper case
const properCase = str => str.split('').map((it, index) => index === 0 ? it.toUpperCase() : it).join('')

module.exports = {
  camelCase,
  properCase
}
