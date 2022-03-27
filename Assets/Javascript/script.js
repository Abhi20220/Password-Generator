// Assignment Code
var generateBtn = document.querySelector("#generate");

// Creating arrays of possible character choices
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];


// this function collects the users input information when prompted, parseInt is used to convert any strings to integers and formulate a password at the end
function initalInput () {
  passwordLength = parseInt (
    prompt(
      "Please select a length from your password that fits the criteria",
      "Minimum Characters: 8 - Maximium Characters: 128",

    ),
    10
  )
};

// this function works when a value that is non a number is input when asked about how many characters the user wants

console.log(passwordLength);
if (isNaN(passwordLength)) {
  alert ("Only Use Numbers Please!");
  initalInput();
} else if (passwordLength < 8 || passwordLength > 128) {
  alert("Choose a number from 8 to 128 to determine your password length please!");
  initalInput();
}
console.log(passwordLength);
return passwordLength;
}

function passwordCriteria () {
  oneOfEachCharacter= "";
  passwordCriteriaReq = "";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Added confirm prompts which the user clicks on
upperCase = confirm ("Do you want your password to contain uppercase characters 'A' 'B'..." );
lowerCase = confirm ("Do you want your password to contain lowercase characters 'a' 'b'..." );
numbers = confirm ("Do you want your password to contain numbers characters '1' '2'..." );
special = confirm ("Do you want your password to contain special characters '$' '%'..." );


// If the user does not confirm any of the password criteria prompts then the following function will occur
if (!upperCase && !lowerCase && !numbers && !special) {
  alert("To generate your password please satisfy at least ONE (1) password criteria!");
  passwordCriteria ();

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
