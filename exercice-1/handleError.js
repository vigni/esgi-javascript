exports.verifMessage = (str) => {
  return (typeof str == "string" && str !== "" ) ? true : false;
}
