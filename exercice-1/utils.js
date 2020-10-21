//ucfirst
const ucFirst = (str) => {
  return str[0].toUpperCase() + str.substring(1);
}

//capitalize
const capitalize = (str) => {
  return str.split(' ').map(w => ucFirst(w)).join(' ');
}

// camelCAse
const camelCase = (str) => {
  return capitalize(str).replace(" ", "")
}

//snake_case
const snakeCase = (str) => {
  return str.replace(" ", "_")
}

module.exports = {
  ucFirst,
  capitalize,
  camelCase,
  snakeCase
};