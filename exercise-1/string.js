let prairie = {
  animal : {
    type: {
      name: "chien"
    }
  }
}
const hello = "toggle case is the coolest"

//ucfirst
const ucfirst = (str) => {
  if (typeof str !== "string" || str === "") return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//capitalize
const capitalize = (str) => {
  if (typeof str !== "string" || str === "") return "";

  return str.toLowerCase().split(' ').map(w => ucfirst(w)).join(' ');
}

// camelCAse
const camelCase = (str) => {
  if (typeof str !== "string" || str === "") return "";
  return capitalize(str.replace(/_/g, ' ')).replace(/\W/g, "");
  return 
}

//snake_case
const snake_case = (str) => {
  if (typeof str !== "string" || str === "") return "";
  return str.replace(/ /g, '_').toLowerCase();
}

const leet = (str) => {
  const obj = {a: 4,e: 3,i: 1,o: 0,u: '(_)', y:7  };
  return str.replace(/[AEIOUY]/gi, function(e) {
    return obj[e.toLowerCase()] !== undefined ? obj[e.toLowerCase()] : e;
  })
}

const verlan = (str) => {
  if (typeof str !== "string" || str === "") return "";
  return str.split(" ").map(word => {
    return word.split("").reverse().join("");
  }).join(" ")
}

const yoda = (str) => {
  if (typeof str !== "string" || str === "") return "";
  return str.split(" ").reverse().join(" ");
}

const prop_access = (object, path) => {
  if (typeof object !== "object" || object === null) return object + " not exist";
  if (typeof path !== "string" || path == "") return object;

  path.split(".").map(e => { 
    if(object.hasOwnProperty(e)) return object = object[e];
    console.log(path + " not exist") 
  });
  
  return object;
}

const type_check_v1 = (value, type) => {
  return typeof value === type ? true : false
}
console.log(`ucfirst : ${ucfirst(hello)}`);
console.log(`capitalize: ${capitalize(hello)}`);
console.log(`camelCase: ${camelCase(hello)}`);
console.log(`snake_case: ${snake_case(hello)}`);
console.log(`leet: ${leet(hello)}`)
console.log(`prop_access: ${prop_access(prairie, "animal.gender")}`)
console.log(`verlan: ${verlan(hello)}`)
console.log(`yoda: ${yoda(hello)}`)
console.log(type_check_v1(null, null))