const inputField = document.getElementById("inputField");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

inputField.addEventListener('input' , () => {
    // Variable to hold the input value
    const inputString = inputField.value;

    // Update the character count
    charCount.textContent = inputString.length;

    // Removes whitespaces from both the sides of the string
    // Split string at spaces into array of substrings
    const wordArray = inputString.trim().split(/\s+/);

    // Filter empty string
    // Update the word count
    wordCount.textContent = wordArray.filter((item) => item).length;
});