// dummy steps to change the title of the doc
//var element = document.getElementById("main-title");
//element.innerHTML = "not a Password Generator";

// initiate values for inputs to be globally
var userPasswordLength = null;
var lowerCaseInput = null;
var upperCaseInput = null;
var numericCharInput = null;
var specialCharInput = null;
//initiate list of password criteria 
var criteriaArray = [];
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
  lowerCaseInput = window.prompt("Do you need lowercase letters? Enter Y for YES and N for NO.");
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
  upperCaseInput = window.prompt("Do you need any uppcase letters? Enter Y for YES and N for NO.");
  // validate response
  if (upperCaseInput === "Y") {
    return true;
  } else if (upperCaseInput === "N") {
    return false;
  } else {
      window.alert("That response was not valid!");
      upperCaseCheck();// recursively call this function until response is valid
  }
}

// function that prompts user for numeric character requirement and returns true if input is valid
function numericCharCheck() {
  numericCharInput = window.prompt("Do you need any numeric characters? Enter Y for YES and N for NO.");
  // validate response
  if (numericCharInput === "Y") {
    return true;
  } else if (numericCharInput === "N") {
    return false;
  } else {
      window.alert("That response was not valid!");
      numericCharCheck();// recursively call this function until response is valid
  }
}

// function that prompts user for special character requirement and returns true if input is valid
function specialCharCheck() {
  specialCharInput = window.prompt("Do you need any special characters? Enter Y for YES and N for NO.");
  // validate response
  if (specialCharInput === "Y") {
    return true;
  } else if (specialCharInput === "N") {
    return false;
  } else {
      window.alert("That response was not valid!");
      specialCharCheck();// recursively call this function until response is valid
  }
}

// function that checks at least one character type is selected
function passwordCriteriaDefined() {
  // add my criteria to the array
  criteriaArray.push(passwordLength());
  criteriaArray.push(lowerCaseCheck());
  criteriaArray.push(upperCaseCheck());
  criteriaArray.push(numericCharCheck());
  criteriaArray.push(specialCharCheck());
  // check if one of them is true, starting at the second criteria because PWlength will always be within valid at this point
  for (var i = 1; i < criteriaArray.length; i++) {
    if (criteriaArray[i]) {
      return true;
    }
  }
  // if none were true, repeat the cycle until one of them is true
  window.alert("One of the criteria must be required to generate a secure password.");
  passwordCriteriaDefined();
}

// Generate password function that returns a password that meets all criteria
function generatePassword() {
  passwordCriteriaDefined();
  
}