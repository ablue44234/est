// Function to calculate the sum of all multiples of 3 or 5 below a given number
function sumMultiplesOf3And5(limit) {
    let sum = 0;
    for (let i = 1; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

// Test cases
const limit = 1000;
console.log(`Sum of all multiples of 3 or 5 below ${limit}:`, sumMultiplesOf3And5(limit));
