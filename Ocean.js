// Define an ocean object
const ocean = {
    name: 'Atlantic Ocean',
    depth: 5000, // in meters
    temperature: 20, // in Celsius
    salinity: 35, // in parts per thousand
    currentSpeed: 1, // in meters per second

    // Method to describe the ocean
    describe: function() {
        console.log(`The ${this.name} is a vast body of water with a depth of ${this.depth} meters.`);
        console.log(`It has an average temperature of ${this.temperature}°C and a salinity of ${this.salinity} ppt.`);
        console.log(`The ocean currents flow at a speed of ${this.currentSpeed} meters per second.`);
    },

    // Method to change the ocean temperature
    changeTemperature: function(newTemperature) {
        this.temperature = newTemperature;
        console.log(`The temperature of the ${this.name} has changed to ${this.temperature}°C.`);
    },

    // Method to change the ocean salinity
    changeSalinity: function(newSalinity) {
        this.salinity = newSalinity;
        console.log(`The salinity of the ${this.name} has changed to ${this.salinity} ppt.`);
    }
};

// Test the ocean object
ocean.describe();
ocean.changeTemperature(22);
ocean.changeSalinity(37);
