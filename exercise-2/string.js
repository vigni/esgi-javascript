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

function type_check(object, conf) {
  if (type_check_v1(object, conf.type)) {
    if (conf.hasOwnProperty("properties")){
      for (key in conf.properties) {
        if (conf.properties[key].hasOwnProperty("properties") && !type_check(object[key], conf.properties[key]) || !type_check_v2(object[key], conf.properties[key])) {
            return false;
        }
      }
    } else if (!type_check_v2(object, conf)) return false;
    return true;
  }
  return false;
}