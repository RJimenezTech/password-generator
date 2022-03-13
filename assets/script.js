// dummy steps to change the title of the doc
//var element = document.getElementById("main-title");
//element.innerHTML = "not a Password Generator";

var userPasswordLength = null;

// Assignment Code
var generateBtn = document.querySelector("#generate"); // returns first element with id="generate"

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword(); // calls generatePassword() function and assigns a value to password variable
  var passwordText = document.querySelector("#password"); // find element using selector #password

  passwordText.value = password; // assign that element a value of password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// function that generates prompts for password criteria
function passwordCriteriaProcess() {
  console.log("This password meets the criteria!");
  //
}

// function that prompts user for length of password and returns true if input is valid
function passwordLength () {
  // assign global variable "userPasswordLength" the input value from user
  userPasswordLength = window.prompt("How many characters do you need your password to be? Choose a number between 8 and 128, inclusive.")
  // validate user input for length of password
  if (userPasswordLength >= 8 && userPasswordLength <= 128) {
    return true;
  } else {
    window.alert("That length is not allowed. Please try again");
    passwordLength(); // recursively call this function until length is acceptable
  }
}

// function that prompts user for lowercase requirement and returns true if input is valid
function lowerCaseCheck() {
  var lowerCaseInput = window.prompt("Are you required to have lowercase letters? Enter Y for YES and N for NO.");
  // validate response
  if (lowerCaseInput === "Y") {
    return true;
  } else if (lowerCaseInput === "N") {
    return false;
  } else {
      window.alert("That response was not valid!");
      lowerCaseCheck();// recursively call this function until response is valid
  }
}

// function that prompts user for uppercase requirement and returns true if input is valid
function upperCaseCheck() {
  

}

// function that prompts user for lowercase, uppercase, numeric and/or special characters
// function chooseCharacterTypes() {
//   // validate at least one character type was selected
//   var typesArray = [];

//   var upperCaseInput = window.prompt("Are you required to have uppercase letters? Enter Y for YES and N for NO." );

//   var numericInput = window.prompt("Are you required to have numeric characters? Enter Y for YES and N for NO.");

//   var specialCharInput = window.prompt("Are you required to have special characters? Enter Y for YES and N for NO.");

// }

// Generate password function that returns a password that meets all criteria
function generatePassword() {
  return passwordLength();

}