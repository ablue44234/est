function getRandom(max) {
    return Math.floor(Math.random() * max);
}

// Example usage: generate a random number between 0 and 100
const randomNumber = getRandom(101); // 101 is the maximum value, exclusive
console.log("Random number between 0 and 100:", randomNumber);
