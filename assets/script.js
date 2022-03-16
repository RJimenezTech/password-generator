//initiate list of password criteria
// will contain true/false values whether criteria is requried
var criteriaArray = [];
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
  var lowerCaseInput = window.prompt("Do you need lowercase letters? Enter Y for YES and N for NO.");
  // validate response
  if (lowerCaseInput === "Y" || lowerCaseInput === "y") {
    return true;
  } else if (lowerCaseInput === "N" || lowerCaseInput === "n") {
    return false;
  } else {
      window.alert("That response was not valid!");
      lowerCaseCheck();// recursively call this function until response is valid
  }
}
// function that prompts user for uppercase requirement and returns true if input is valid
function upperCaseCheck() {
  var upperCaseInput = window.prompt("Do you need any uppcase letters? Enter Y for YES and N for NO.");
  // validate response
  if (upperCaseInput === "Y" || upperCaseInput === "y") {
    return true;
  } else if (upperCaseInput === "N" || upperCaseInput === "n") {
    return false;
  } else {
      window.alert("That response was not valid!");
      upperCaseCheck();// recursively call this function until response is valid
  }
}
// function that prompts user for numeric character requirement and returns true if input is valid
function numericCharCheck() {
  var numericCharInput = window.prompt("Do you need any numeric characters? Enter Y for YES and N for NO.");
  // validate response
  if (numericCharInput === "Y" || numericCharInput === "y") {
    return true;
  } else if (numericCharInput === "N" || numericCharInput === "n") {
    return false;
  } else {
      window.alert("That response was not valid!");
      numericCharCheck();// recursively call this function until response is valid
  }
}
// function that prompts user for special character requirement and returns true if input is valid
function specialCharCheck() {
  var specialCharInput = window.prompt("Do you need any special characters? Enter Y for YES and N for NO.");
  // validate response
  if (specialCharInput === "Y" || specialCharInput === "y") {
    return true;
  } else if (specialCharInput === "N" || specialCharInput === "n") {
    return false;
  } else {
      window.alert("That response was not valid!");
      specialCharCheck();// recursively call this function until response is valid
  }
}
// function that checks at least one character type is selected
function passwordCriteriaDefined() {
  // add my criteria to the array to keep track of which ones are true
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
// generate a random number to choose which position in the criteriaArray i will choose the next character
function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// function that returns a random lowercase letter
function randomLowerCase() {
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  return lowerCaseLetters[randomNumber(1,26)];
}
// function that returns a random number between 0 - 9
function randomDigit() {
  return randomNumber(0,9);
}
// function that returns a random uppercase letter
function randomUpperCase() {
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upperCaseLetters[randomNumber(1,26)];
}
// function that returns a random special character
function randomSpecialChar() {
  var specialChars = "!'\"#$%&()*+,-.:;<=>?@[\\]^_`{}|~";
  return specialChars[randomNumber(1,31)];
}
// Generate password function that returns a password that meets all criteria.
// for this to work, 1 corresponds to the lowercase criteria, 2 corresponds to the uppercase
// criteria, 3 corresponds to the numeric criteria, 4 corresponds to the special char crit.
function generatePassword() {
  passwordCriteriaDefined();
  var generatedPassword = "";
  while (generatedPassword.length < userPasswordLength) {
    // randomly choose which a criteria then (1,2,3,4)
    // check if that corresponding element in the array is true
    var pickAChar = randomNumber(1,4);
    if (pickAChar === 1 && criteriaArray[1] === true) {
      generatedPassword += randomLowerCase();
    } else if (pickAChar === 2 && criteriaArray[2] === true) {
      generatedPassword += randomUpperCase();
    } else if (pickAChar === 3 && criteriaArray[3] === true) {
      generatedPassword += randomDigit();
    } else if (pickAChar === 4 && criteriaArray[4] === true) {
      generatedPassword += randomSpecialChar();
    } else {
      generatedPassword += "";
    }
  }
  return generatedPassword;
}
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