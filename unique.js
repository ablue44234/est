// Function to generate a unique identifier (UUID)
function generateUUID() {
    const timestamp = new Date().getTime().toString(16); // Convert current timestamp to hexadecimal string
    const random1 = Math.random().toString(16).substr(2, 8); // Generate random hexadecimal string
    const random2 = Math.random().toString(16).substr(2, 4); // Generate random hexadecimal string
    const random3 = Math.random().toString(16).substr(2, 4); // Generate random hexadecimal string
    const random4 = Math.random().toString(16).substr(2, 4); // Generate random hexadecimal string
    const random5 = Math.random().toString(16).substr(2, 12); // Generate random hexadecimal string

    // Concatenate timestamp and random strings to form UUID
    return `${timestamp}-${random1}-${random2}-${random3}-${random4}-${random5}`;
}

// Generate and display a unique identifier
console.log("Unique Identifier (UUID):", generateUUID());
