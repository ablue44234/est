// Function to remove duplicates from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Test case
const numbers = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 8];
console.log("Array with duplicates:", numbers);
console.log("Array without duplicates:", removeDuplicates(numbers));
