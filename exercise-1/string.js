const prairie = {
  animal: {
    type: {
      name: "chien"
    }
  }
}
const hello = "hello world"

//ucfirst
const ucfirst = (str) => {
  if (typeof str !== "string" || str.length == 0) return element;
  return str[0].toUpperCase() + str.slice(1);
}

//capitalize
const capitalize = (str) => {
  if (typeof str !== "string" || str.length == 0) return element;

  return str.toLowerCase().split(' ').map(w => ucFirst(w)).join(' ');
}

// camelCAse
const camelCase = (str) => {
  if (typeof str !== "string" || str.length == 0) return element;
  return capitalize(str).replace("/\W/g", "")
}

//snake_case
const snakeCase = (str) => {
  if (typeof str !== "string" || str.length == 0) return "";
  return str.replace(" ", "_")
}

const leet = (str) => {
  const obj = {a: 4,e: 3,i: 1,o: 0,u: '(_)', y:7  };
  return str.replace(/[AEIOUY]/gi, function(e) {
    return obj[e.toLowerCase()] !== undefined ? obj[e.toLowerCase()] : e;
  })
}

const verlan = (str) => {
  if (typeof str !== "string" || str.length == 0) return "";
  return str.split(" ").map(word => {
    return word.split("").reverse().join("");
  }).join(" ")
}

const yoda = (str) => {
  if (typeof str !== "string" || str.length == 0) return "";
  return str.split(" ").reverse().join(" ");
}

const prop_access = (object, path) => {
  if (typeof object !== "object" || object == null) return "First param must be an object";
  if (typeof path !== "string" || path.length == 0) return "Second param must be a string with at least 1 caractère";

  path.split(".").map(e => { 
    if(object.hasOwnProperty(e)) return object = object[e];
    object = "Object has not property named: " + e;
  });
  
  return JSON.stringify(object);
}


console.log(`ucFirst : ${ucFirst(hello)}`);
console.log(`capitalize: ${capitalize(hello)}`);
console.log(`camelCase: ${camelCase(hello)}`);
console.log(`snakeCase: ${snakeCase(hello)}`);
console.log(`leet: ${leet(hello)}`)
console.log(`prop_access: ${prop_access(prairie, "animal.type")}`)
console.log(`verlan: ${verlan(hello)}`)
console.log(`yoda: ${yoda(hello)}`)