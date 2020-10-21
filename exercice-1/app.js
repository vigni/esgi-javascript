const handleError =  require("./handleError")
const utils = require("./utils")

const hello = "hello world";

const allResults = (message) => {
  if(handleError.ifString(message)) {
    console.log(`ucFirst : ${utils.ucFirst(message)}`);
    console.log(`capitalize: ${utils.capitalize(message)}`);
    console.log(`camelCase: ${utils.camelCase(message)}`);
    console.log(`snakeCase: ${utils.snakeCase(message)}`);
  } else {
    console.log("")
  }
}

allResults(hello);