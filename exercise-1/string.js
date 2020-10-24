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
  if (typeof path !== "string" || path == null || path == "") return object;
  if (typeof object !== "object" || object === null) return console.log(path + " not exist") ;

  path.split(".").map(e => { 
    if(object.hasOwnProperty(e)) return object = object[e];
    return console.log(path + " not exist") 
  });
  
  return object;
}

const type_check_v1 = (variable, type) => {
  const typeOfVariable = typeof variable;
  switch (typeOfVariable) {
    case "object":
      switch (type) {
        case "null":
          return variable === null;
        case "array":
          return Array.isArray(variable)
        case "object":
          return variable !== null && !Array.isArray(variable);
      }
      break;
    default:
      return typeOfVariable === type;
  }
}

const type_check_v2 = (value, conf) => {
  for (key in conf) {
    switch (key) {
      
      case "type":
        if (!type_check_v1(value, conf.type)) return false;
        break;
      case "value":
        if (JSON.stringify(value) !== JSON.stringify(conf.value)) return false;
        break;
      case "enum":
        // Par défault, non trouvé dans l'enum
        let found = false;
        for (subValue of conf.enum) {
          found = type_check_v2(value, { value: subValue });
          // ou
          // found = JSON.stringify(value) !== JSON.stringify(subValue);

          // Si je trouve, je m'arrete
          if (found) break;
        }
        // Si je ne me suis jamais arrêté, value n'est pas dans l'enum => return false
        if (!found) return false;
        break;
    }
  }

  return true;
}

const type_check = (object, conf) => {
  for(key in conf) {
    switch (key) {
      case "type": if(!type_check_v1(object, conf.type)) return false;
      case "properties":
        for(key in conf.properties){
          if(conf.properties[key].hasOwnProperty("properties")){
            if (!type_check(object[key], conf.properties[key])) return false;
          } 
          if(!type_check_v2(object[key], conf.properties[key])) return false;
        }
    }
  }
  return true;
}

console.log(type_check(
  {
    id: 5,
    name: 'nicolas',
    detail: {
      age: 21
    },
    sport: ['foot', 'tennis'],
  },
  {
    type: 'object',
    properties: {
        id: { type: 'number' },
        name: { type: 'string', enum: ['robert', 'nicolas', 'michel'] },
        detail: {
            type: 'object',
            properties: {
              age: {
                type: 'number'
              }
            }
          },
        sport: {
            type: 'array',
            enum: [['foot', 'basket'], ['foot', 'tennis']],
        }
    }
  }
));

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
