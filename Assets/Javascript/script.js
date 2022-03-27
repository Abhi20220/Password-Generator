// Assignment Code
var generateBtn = document.querySelector("#generate");

// Creating arrays of possible character choices
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];


// this function collects the information that the user has input to give the in password length

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Added confirm prompts
upperCase = confirm ("Do you want your password to contain uppercase characters 'A' 'B'..." );
lowerCase = confirm ("Do you want your password to contain lowercase characters 'a' 'b'..." );
numbers = confirm ("Do you want your password to contain numbers characters '1' '2'..." );
special = confirm ("Do you want your password to contain special characters '$' '%'..." );

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
