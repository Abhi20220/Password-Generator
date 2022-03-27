// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//The below function collates the information that the user has input and it is stored within "password length"
function initalInput() {
  passwordLength = parseInt(
    prompt(
      "Choose your password length",
      "Minimum: 8  -  Maximum: 128"
    ),
    10
);

//The below function tells us that if a user chooses a letter instead of number they will get this alert
  console.log(passwordLength);
  if (isNaN(passwordLength)) {
    alert("Please use only numbers within the specified range!");
    initalInput();
    //The below else if function tells us that if a user chooses a number less than 8 or greater than 128 they will have triggered the following alert
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("Please select a number that is within the specified range of 8 to 128");
    initalInput();
  }
  console.log(passwordLength);
  return passwordLength;
}

function passwordConditions() {
    oneOfEachCharacter = "";
    passwordCriteriaReq = "";
  
    console.log(passwordLength);
  

  //Asks the user to confirm which set of characters they want for their random password
    lowercase = confirm("Do you want lowercase characters 'a', 'b'...");
    uppercase = confirm("Do you want uppercase characters 'A', 'B'...");
    numbers = confirm("Do you want numbers '1', '2'...");
    special = confirm("Do you want special text '$', '&'...");

    if (!lowercase && !uppercase && !numbers && !special) {
        alert("Please select at least ONE (1) of the criteria to generate a password for you");
        passwordConditions();
    }

    //character set for lowcase
  if (lowercase) {
    userLowerCase = "abcdefghijklmnopqrstuvwxyz";
    passwordCriteriaReq += userLowerCase;
    var firstString = "";
    firstString +=
      userLowerCase[Math.floor(Math.random() * userLowerCase.length)];
      oneOfEachCharacter += firstString;
  }
 //character set for uppercase
  if (uppercase) {
    userUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    passwordCriteriaReq += userUpperCase;
    var secondString = "";
    secondString +=
      userUpperCase[Math.floor(Math.random() * userUpperCase.length)];

      oneOfEachCharacter += secondString;
  }
 //character set for numbers
  if (numbers) {
    userNumbers = "0123456789";
    passwordCriteriaReq += userNumbers;
    var thirdString = "";
    thirdString += userNumbers[Math.floor(Math.random() * userNumbers.length)];

    oneOfEachCharacter += thirdString;
  }
 //character set for special characters
  if (special) {
    userSymbols = '~!@#$%^&*()-_=+[{]};:,<.>/?';
    passwordCriteriaReq += userSymbols;
    var fourthString = "";
    fourthString += userSymbols[Math.floor(Math.random() * userSymbols.length)];
    oneOfEachCharacter += fourthString;
  }
    console.log(passwordCriteriaReq);
    return passwordCriteriaReq;
}

// password generator 
function randomSelector(length) {
  var passLength = initalInput();

  if (passLength >= 8 && passLength <= 128) {
    output = passwordConditions();
    let result = " ";
    const charactersLength = output.length;
    for (let i = 0; i < passLength - oneOfEachCharacter.length; i++) {
      result += output.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}

function generatePassword() {
  finalPw = randomSelector(passwordLength) + oneOfEachCharacter;
  return finalPw;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//aditional variables
var lowercase;
var uppercase;
var numbers;
var special;
var minLength = 8;
var maxLength = 128;
var passwordLength;
var passwordCriteriaReq= "";
var oneOfEachCharacter = "";
var finalPw = "";
var output
