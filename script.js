// Assignment code here
var answer = window.confirm("Do you want to create a password? Please click okay to begin.");

// Prompts user to enter a password length
var passwordLength = prompt("Enter the length of password at least 8 characters but no more than 128 characters. ")

//Prompts user to enter lowercase, uppercase, and/or special characters
var includeLowerCase = confirm("Include lowercase letters? Click OK for yes, or CANCEL for no");
var includeUpperCase = confirm("Include uppercase letters? Click OK for yes, or CANCEL for no.");
var includeNumbers = confirm("Include numbers? Click OK for yes, or CANCEL for no");
var includesSpecialCharacters = confirm("Include special characters? Click OK for yes, or CANCEL for no");

var upperCaseLetters = ' A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
var lowerCaseLetters = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
var potentialCharacters = [];
var numbers = 123456789;
var specialCharacters = '! @ # $ * &';

if(upperCase) {
  
};

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