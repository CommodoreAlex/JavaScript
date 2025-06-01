// Enable strict mode for better error-checking and safer JavaScript coding
'use strict';

// Tell Node.js to keep the program running to accept input from the user (e.g., from the keyboard)
process.stdin.resume();

// Set the encoding of the input to UTF-8, which means we will be dealing with regular strings (not binary)
process.stdin.setEncoding('utf-8');

// Declare a variable to store all input from the user as a single string
let inputString = '';

// Track which line of input we’re currently reading
let currentLine = 0;

// When user types something and presses Enter, this event gets triggered
process.stdin.on('data', inputStdin => {
    // Add the typed input to the `inputString`
    inputString += inputStdin;
});

// When the user is done typing (usually by pressing Ctrl+D), this event gets triggered
process.stdin.on('end', _ => {
    // Remove extra whitespace, split the input into lines, and clean up each line
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    // Call the main function to start the actual logic of the program
    main();    
});

// A helper function that returns the next line of input each time it's called
function readLine() {
    // Return the current line and move to the next one for the next call
    return inputString[currentLine++];
}

/**
 * This function greets the user.
 *
 * It takes one parameter:
 *   - parameterVariable: a string of text input by the user.
 */
function greeting(parameterVariable) {
    // Print "Hello, World!" to the console
    console.log('Hello, World!');

    // Print the user's input (parameterVariable) to the console
    console.log(parameterVariable);
}

// The main function where the program starts after input is ready
function main() {
    // Read one line of input from the user and store it in parameterVariable
    const parameterVariable = readLine();

    // Call the greeting function with the user’s input
    greeting(parameterVariable);
}
