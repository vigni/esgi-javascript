const utils = require("./utils")

const hello = "hello world";

const prairie = {
  animal: {
    type: {
      name: "chien"
    }
  }
}


console.log(`ucFirst : ${utils.ucFirst(hello)}`);
console.log(`capitalize: ${utils.capitalize(hello)}`);
console.log(`camelCase: ${utils.camelCase(hello)}`);
console.log(`snakeCase: ${utils.snakeCase(hello)}`);
console.log(`leet: ${utils.leet(hello)}`)
console.log(`prop_access: ${utils.prop_access(prairie, "animal.type")}`)
console.log(`verlan: ${utils.verlan(hello)}`)
console.log(`yoda: ${utils.yoda(hello)}`)