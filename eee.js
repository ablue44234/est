// Function to find the longest word in a sentence
function findLongestWord(sentence) {
    // Split the sentence into an array of words
    const words = sentence.split(' ');

    // Initialize variables to store the longest word and its length
    let longestWord = '';
    let maxLength = 0;

    // Iterate through each word in the array
    for (let word of words) {
        // Remove any non-alphanumeric characters from the word
        const cleanedWord = word.replace(/[^a-zA-Z]/g, '');

        // Check if the current word is longer than the previous longest word
        if (cleanedWord.length > maxLength) {
            longestWord = cleanedWord;
            maxLength = cleanedWord.length;
        }
    }

    return longestWord;
}

// Test the findLongestWord function
const sentence = "The quick brown fox jumps over the lazy dog";
console.log("Longest word in the sentence:", findLongestWord(sentence));
