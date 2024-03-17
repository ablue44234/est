// Function to find the maximum number in an array
function findMaxNumber(arr) {
    if (arr.length === 0) {
        return null; // Return null if array is empty
    }

    let max = arr[0]; // Initialize max to the first element of the array

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if a larger number is found
        }
    }

    return max;
}

// Test cases
const numbers1 = [1, 3, 7, 2, 9, 4];
const numbers2 = [-5, -2, -9, -1, -7];

console.log("Maximum number in numbers1:", findMaxNumber(numbers1));
console.log("Maximum number in numbers2:", findMaxNumber(numbers2));
