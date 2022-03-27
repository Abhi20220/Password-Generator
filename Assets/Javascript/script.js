// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Asks the user to confirm which set of characters they want for their random password
lowercase = confirm("Do you want lowercase characters 'a', 'b'...");
uppercase = confirm("Do you want uppercase characters 'A', 'B'...");
numbers = confirm("Do you want numbers '1', '2'...");
special = confirm("Do you want special text '$', '&'...");


//The below function collates the information that the user has input and it is stored within "password length"
function initalInput() {
  passwordLength = parseInt(
    prompt(
      "Choose your password length",
      "Minimum: 8  -  Maximum: 128"
    ),
   
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


// If the user does not select any criteria they will be alerted to choose at least one criteria
if (!lowercase && !uppercase && !numbers && !special) {
  alert("Please select at least ONE (1) of the criteria to generate a password for you");
  passwordConditions();
}

// Runs the passwordconditions criteria to see if they were met
function passwordConditions() {
  oneOfEachCharacter = "";
  passwordCriteriaReq = "";

  console.log(passwordLength);


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
