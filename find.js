// Function to find the intersection of two arrays
function findIntersection(arr1, arr2) {
    // Initialize an empty array to store the intersection elements
    const intersection = [];

    // Convert one of the arrays to a Set for faster lookup
    const set = new Set(arr1);

    // Iterate through the second array and check for intersection
    for (let item of arr2) {
        if (set.has(item)) {
            intersection.push(item);
            set.delete(item); // Remove the element from the set to avoid duplicates
        }
    }

    return intersection;
}

// Test case
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log("Intersection of arrays:", findIntersection(array1, array2));
