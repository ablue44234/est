// Function to count the occurrences of each character in a string
function countCharacters(str) {
    const charCount = {};

    // Loop through each character in the string
    for (let char of str) {
        // Increment the count for the current character or initialize it to 1
        charCount[char] = (charCount[char] || 0) + 1;
    }

    return charCount;
}

// Test case
const text = "hello world";
console.log("Character count:", countCharacters(text));
