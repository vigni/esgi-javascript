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

function vig(str, code) {
  if (typeof str !== "string") return "";
  if (str.length === 0) return str;

  while (code.length < str.length) {
    code += code;
  }
  code = code.substr(0, str.length);
  let codeIndex = 0;

  return str
    .split("")
    .map((letter, index) => {
      letter = letter.toLowerCase();
      const aCode = "a".charCodeAt(0);
      const letterNumber = letter.charCodeAt(0) - aCode;

      if (letterNumber < 0 || letterNumber > 25) return letter;

      const codeNumber = code.charCodeAt(codeIndex) - aCode;
      codeIndex++;

      return String.fromCharCode(((letterNumber + codeNumber) % 26) + aCode);
    })
    .join("");
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
  if (typeof path !== "string" || path == null || path == "") return object;
  if (typeof object !== "object" || object === null) return console.log(path + " not exist") ;

  path.split(".").map(e => { 
    if(!object.hasOwnProperty(e)) return console.log(path + " not exist") 
    return object = object[e];
    
  });
  
  return object;
}

// console.log(`ucfirst : ${ucfirst(hello)}`);
// console.log(`capitalize: ${capitalize(hello)}`);
// console.log(`camelCase: ${camelCase(hello)}`);
// console.log(`snake_case: ${snake_case(hello)}`);
// console.log(`leet: ${leet(hello)}`)
// console.log(`prop_access: ${prop_access(prairie, "animal.gender")}`)
// console.log(`verlan: ${verlan(hello)}`)
// console.log(`yoda: ${yoda(hello)}`)
// console.log(type_check_v1(2, "number"))
// console.log(type_check_v2(3, {type:"number"}))
