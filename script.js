// Assignment code here
var answer = window.confirm("Do you want to create a password? Please click okay to begin.");


if (answer) {
    // User clicked "ok"
    console.log("User wants to proceed.");
} else {
    // User clicked "no"
    console.log("User canceled.");
}
// Prompts user to enter a password length
var passwordLength = prompt("Enter the length of password at least 8 characters but no more than 128 characters. ")


//Prompts user to enter lowercase, uppercase, and/or special characters
var includeLowerCase = confirm("Include lowercase letters? Click OK for yes, or CANCEL for no");
var includeUpperCase = confirm("Include uppercase letters? Click OK for yes, or CANCEL for no.");
var includeNumbers = confirm("Include numbers? Click OK for yes, or CANCEL for no");
var includesSpecialCharacters = confirm("Include special characters? Click OK for yes, or CANCEL for no");


console.log("Include lowercase letters:", includeLowerCase);
console.log("Include uppercase letters:", includeUpperCase);
console.log("Include numbers:", includeNumbers);
console.log("Include special characters:", includesSpecialCharacters);


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");


    passwordText.value = password;


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);