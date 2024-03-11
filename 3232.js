// Function to remove duplicates from an array while preserving the original order
function removeDuplicates(arr) {
    // Create an empty set to store unique elements
    const uniqueSet = new Set();
    // Create an array to store the result
    const result = [];

    // Iterate over the original array
    for (const item of arr) {
        // If the item is not already in the set, add it to the result array and set
        if (!uniqueSet.has(item)) {
            result.push(item);
            uniqueSet.add(item);
        }
    }

    return result;
}

// Example usage:
const arrayWithDuplicates = [1, 2, 3, 2, 4, 5, 3, 6, 7, 1];

// Remove duplicates from the array
const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);

// Display the result
console.log("Array with duplicates:", arrayWithDuplicates);
console.log("Array without duplicates:", arrayWithoutDuplicates);
