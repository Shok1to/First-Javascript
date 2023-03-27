// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-"];

// // Alert - send a message
// alert('This is my message to the user!')

// // Confirm - collect user info - true false
// var trueFalse = confirm('Is the sky blue?')

// // Prompt - collects user info - input 
// var userInput = prompt("What's your favorite color?")

// console.log('Sky: ', trueFalse);
// console.log('Color: ', userInput);




function generatePassword() {

  // Ask user how many characters they want in their password
  var pwLength = prompt("How many characters you want in your password?")

  // Check to make sure their answer follows criteria
  if (isNaN(pwLength)) {
    alert('your password length must be number');
    return;
  }

  if (pwLength < 8 || pwLength > 128) {
    alert("your password must be 8 to 128 characters");
    return;
  }

  // Collect user's character type preferences
  var useLowerCase = confirm("Is your password use lower case")
  var useUpperCase = confirm("Is your password use upper case")
  var useNumber = confirm("Is your password use number")
  var useSpecialcharacter = confirm("Is your password use Special character")

  if (useLowerCase === false && useUpperCase === false && useNumber === false && useSpecialcharacter === false) {
    alert("you must choose at least one character type");
    return;
  }

  var userCharacterPool = [];

  if(useLowerCase) {
    userCharacterPool = userCharacterPool.concat(lowerCase)
  }

  if(useUpperCase) {
    userCharacterPool = userCharacterPool.concat(upperCase)
  }

  // if use numbers
  if(useNumber) {
    userCharacterPool = userCharacterPool.concat(numbers)
  }
  // if use special
  if(useSpecialcharacter) {
    userCharacterPool = userCharacterPool.concat(specialCharacter)
  }


  // declare password array variable as placeholder
  var pwd = [useLowerCase, useUpperCase, useNumber, useSpecialcharacter];
  for (var i =0; i < pwd.length; i++){
    console.log[Math.floor(Math.random() * pwLength)];
    
  }
  // for loop through userCharacterPool to pull out random characters usings Math.floor and Math.random
  // push random characters to password array

  console.log('userCharacterPool: ', userCharacterPool)



   return password;
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
