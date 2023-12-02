// Assignment code here
var answer = window.confirm("Do you want to create a password? Please click okay to begin.");

if (answer){
    // Prompts user to enter a password length
    var passwordLength = prompt("Enter the length of password at least 8 characters but no more than 128 characters. ")
}

//Converts the entered value to a number
var lengthNumber = parseInt(passwordLength);

//Prompts user to enter lowercase, uppercase, and/or special characters
var includeLowerCase = confirm("Include lowercase letters? Click OK for yes, or CANCEL for no.");
var includeUpperCase = confirm("Include uppercase letters? Click OK for yes, or CANCEL for no.");
var includeNumbers = confirm("Include numbers? Click OK for yes, or CANCEL for no");
var includesSpecialCharacters = confirm("Include special characters? Click OK for yes, or CANCEL for no");


var upperCaseLetters = ' A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
var lowerCaseLetters = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
var numbers = '0123456789';
var specialCharacters = '! @ # $ * &';

//empty array which can include all the uppercase, lowercase, numbers, and special character combinations
var potentialCharacters = [];

//Add upercse letters
potentialCharacters =potentialCharacters.concat(['A', 'B', 'C', 'D', 'E,', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 
'X', 'Y', 'Z']);

//Add lowercase letters
potentialCharacters = potentialCharacters.concat(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);

//Add numbers
potentialCharacters = potentialCharacters.concat(['o', '1', '2', '3', '4', '5', '6', '7', '8', '9'])

//Add special Characters
potentialCharacters = potentialCharacters.concat(['!', '@', '#', '$', '*', '&']);

//
if(includeUpperCase) {
  potentialCharacters += upperCaseLetters;
};

if (includeLowerCase) {
potentialCharacters += lowerCaseLetters;
}

if (includeNumbers){
potentialCharacters += numbers;
}

if (specialCharacters){
potentialCharacters += specialCharacters;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function generatePassword(length,characters) {
    length = length || 128; 
    characters = characters || "ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxya0123456789";

     var password = '';
     for (var i = 0; i < length; i++){
        var randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
     }

    return password; 
}
//variables for password length, characters such as uppercase, lowercase, numbers, and special characters
    var passwordLength = 128;
    var passwordCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxya0123456789!@#$*&";
    var password = generatePassword(passwordLength, passwordCharacters);
   
    //element ID with "password"
    var passwordText = document.querySelector("#password");
     passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);