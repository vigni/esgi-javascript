String.prototype.ucfirst = function () {
  return this.replace(/^\w/, (e) => e.toUpperCase());
};

String.prototype.vig = function (code) {
  if (this.length === 0) return this;

  while (code.length < this.length) {
    code += code;
  }
  code = code.substr(0, this.length);
  let codeIndex = 0;

  return this.split("")
    .map((letter, index) => {
      letter = letter.toLowerCase();
      const aCode = "a".charCodeAt(0);
      const letterNumber = letter.charCodeAt(0) - aCode; // [0-25]

      if (letterNumber < 0 || letterNumber > 25) return letter;

      const codeNumber = code.charCodeAt(codeIndex) - aCode; // [0-25]
      codeIndex++;

      return String.fromCharCode(((letterNumber + codeNumber) % 26) + aCode);
    })
    .join("");
};

String.prototype.capitalize  = function(){
  if(this === "") return "";
  return this.toLowerCase().split(' ').map(w => ucfirst(w)).join(' ');
}


Object.prototype.prop_access  = function(path){
  if (typeof path !== "string" || path == null || path == "") return this;
  if (this === null) return console.log(path + " not exist") ;

  path.split(".").map(e => { 
    if(!this.hasOwnProperty(e)) return console.log(path + " not exist") 
    this = this[e];
  });
  
  return this;
}
