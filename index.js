let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;
    
    store.drivers.push(this);
  }
  
  trips() {
    
  }
  
  passengers() {
    store.trips.filter
  }
}

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name; 
    
    store.passengers.push(this);
  }
}

class Trip {
  constructor(driver, passenger) {
    this.driverId = driverId;
    this.passengerId = passengerId;
    this.id = ++tripId;
    
    store.trips.push(this);
  }
}