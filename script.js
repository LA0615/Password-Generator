function app() {
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
    var includeSpecialCharacters = confirm("Include special characters? Click OK for yes, or CANCEL for no");

    var upperCaseLetters='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowerCaseLetters='abcdefghijklmnopqrstuvwxyz';
    var numbers='0123456789';
    var specialCharacters = '!@#$*&';

    //empty array which can include all the uppercase, lowercase, numbers, and special character combinations
    var potentialCharacters = '';

    // Add uppercase letters if selected
    if (includeUpperCase) {
        potentialCharacters = potentialCharacters.concat(upperCaseLetters);
        
    }

    // Add lowercase letters if selected
    if (includeLowerCase) {
        potentialCharacters = potentialCharacters.concat(lowerCaseLetters);

    }

    // Add numbers if selected
    if (includeNumbers) {
        potentialCharacters = potentialCharacters.concat(numbers);
    }

    // Add special characters if selected
    if (includeSpecialCharacters) {
        potentialCharacters = potentialCharacters.concat(specialCharacters);
    }

    // Write password to the #password input
    function generatePassword(length,characters) {
        //console.log("Hit generatePassword")
        length = length || 128; 
        characters = characters || "ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxya0123456789";

        var password = '';
        for (var i = 0; i < length; i++){
            var randomIndex = Math.floor(Math.random() * potentialCharacters.length);
            password += potentialCharacters.charAt(randomIndex);
        }

        return password; 
    } // generatePassword
    //variables for password length, characters such as uppercase, lowercase, numbers, and special characters
    var passwordCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxya0123456789!@#$*&";
    var password = generatePassword(passwordLength, passwordCharacters);

    //element ID with "password"
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

} // app

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", app)