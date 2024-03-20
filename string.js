// Function to reverse a string
function reverseString(str) {
    // Split the string into an array of characters, reverse the array, and join it back into a string
    return str.split('').reverse().join('');
}

// Test cases
const strings = ["hello", "world", "JavaScript", "OpenAI"];

// Reverse each string and display the result
strings.forEach(str => {
    console.log(`Original: ${str} - Reversed: ${reverseString(str)}`);
});
