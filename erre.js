// Function to reverse a string
function reverseString(str) {
    // Split the string into an array of characters, reverse it, and then join it back into a string
    return str.split('').reverse().join('');
}

// Example usage:
const originalString = "hello";
const reversedString = reverseString(originalString);

// Display the result
console.log("Original string:", originalString);
console.log("Reversed string:", reversedString);
