// Function to check if two strings are anagrams
function areAnagrams(str1, str2) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
    const cleanStr2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Sort the characters in both strings
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    // Check if the sorted strings are equal
    return sortedStr1 === sortedStr2;
}

// Test cases
const string1 = "listen";
const string2 = "silent";
const string3 = "hello";
const string4 = "world";

console.log(`${string1} and ${string2} are anagrams:`, areAnagrams(string1, string2));
console.log(`${string1} and ${string3} are anagrams:`, areAnagrams(string1, string3));
console.log(`${string1} and ${string4} are anagrams:`, areAnagrams(string1, string4));
