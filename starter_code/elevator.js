
class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.intervalID;
  }

  start() {
    this.intervalID = setInterval(() => {
      this.update();
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalID);
  }

  update() {
    this.log();  
  }

  _passengersEnter() { }
  _passengersLeave() { }
  
  floorUp() {
    if(this.floor < this.MAXFLOOR) {
      this.floor++;
    }
  }
  
  floorDown() {
    if(this.floor > 0) {
      this.floor--;
    }
  }

  call(person) {
    this.requests.push(person);
   }
  
  log() {
    console.log(`Direction: up | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;

let lift = new Elevator;



