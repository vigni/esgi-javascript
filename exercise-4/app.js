function Driver(name) {
  const state = {};
  let prevProps = {};

  this.receiveData = function(data) {
    prevProps = {...props}
    state.state = data.state;
    state.origin = data.origin;
    state.position = data.position;
  }

  this.getState = function() {
    return state.state;
  }

  this.speak = function() {
    switch(props.state) {
      case 'ready':
        return `Here we go! I'm ${name}`;
      case 'happy':
        return "Let's have some fun!";
      case 'sad':
        return `Outch!!! Damn ${name}`;
      case 'normal':
        return "";
      case 'finish':
        switch(props.position) {
          case 1:
              return "I'm the best";
          case 2:
            return "Could be the best";
          case 3:
            return "Will be better next time";
        }
    }
  }

  this.needUpdate = function() {
    return JSON.stringify(prevProps) !== JSON.stringify(props);
  }
} 

function Vehicle(driver, number, maxVelocity = 12, onFire) {
  let prevProps = {};


  this.receiveData = function(data) {
    prevProps = {...props};
    // if(data.event){
    //   switch(data.event) {
    //     case "attack":
    //         return "I'm the best";
    //     case "weapon":
    //       return "Could be the best";
    //     case 3:
    //       return "Will be better next time";
    //   }
    // }
    state.event = data.event;
    state.value = data.origin;
    state.distance = data.distance;
  }

  this.needUpdate = function() {
    return JSON.stringify(prevProps) !== JSON.stringify(props);
  }

  const ride = function() {
    return JSON.stringify(prevProps) !== JSON.stringify(props);
  }
}

function Voiture() {
  

}

function Moto() {
  

}




















// const pilote = new Pilote("Mario");
// pilote.receiveData({​​ state: "ready" }​​);
// if (pilote.needUpdate()) console.log("Speak ready", pilote.speak());
// pilote.receiveData({​​ state: "normal" }​​);
// if (pilote.needUpdate()) console.log("Speak normal", pilote.speak());
// pilote.receiveData({​​ state: "normal" }​​);
// if (pilote.needUpdate()) console.log("Speak normal", pilote.speak());
// pilote.receiveData({​​ state: "happy" }​​);
// if (pilote.needUpdate()) console.log("Speak happy", pilote.speak());
// pilote.receiveData({​​ state: "sad", origin: "Luigi" }​​);
// if (pilote.needUpdate()) console.log("Speak sad", pilote.speak());
// pilote.receiveData({​​ state: "finish", position: 1 }​​);
// if (pilote.needUpdate()) console.log("Speak finish", pilote.speak());
// pilote.receiveData({​​ state: "finish", position: 1 }​​);
// if (pilote.needUpdate()) console.log("Speak finish", pilote.speak());