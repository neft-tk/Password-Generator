// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global Variables
var result = ""
var passwordLength
var tempRange = [];
var finalRange = [];


// Separate arrays for numbers, specials, uppercase, and lowercase characters.
var numArray = ["0", "1", "2", "3", "4", "5","6", "7", "8", "9"];
var specArray = ["!", "?", "+", "$", "%", "&", "*", "~", "^"];
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {

// Prompts/confirm for each type of character set
    var numChoice = confirm("Would you like numbered characters in your password?");
    var specChoice = confirm("Would you like special characters in your password?");
    var upperChoice = confirm("Would you like uppercase characters in your password?");
    var lowerChoice = confirm("Would you like lowercase characters in your password?");

// Stores the responses from the last set of prompts and builds an array which combines any of the other selected arrays into an array to pick characters from for a password
    if (numChoice) {
      finalRange = tempRange.concat(numArray);
    };

    if (specChoice) {
      finalRange = finalRange.concat(specArray);
    };

    if (upperChoice) {
      finalRange = finalRange.concat(upperArray);
    };

    if (lowerChoice) {
      finalRange = finalRange.concat(lowerArray);
    };

    if (!numChoice && !specChoice && !upperChoice && !lowerChoice) {
      alert("Please select at least one set of characters to be included in your password.");
      generatePassword();
    };

// Prompts user for the length of their password.
    passwordLength = prompt("How many characters would you like your password to be? Please select a number from 8-128.");

// Confirms/checks that the string is a number with value from 8-128
    // if ((passwordLength >= 8 ) && (passwordLength <= 128)) {
    //   console.log(passwordLength);
    //   }  else { alert("Please insert a number from 8-128.");
    // };
      
   if ((passwordLength >= 8 ) && (passwordLength <= 128)) {
    console.log(passwordLength); 
      } else { 
        alert("Please insert a number from 8-128.");
        passwordLength = prompt("How many characters would you like your password to be? Please select a number from 8-128.");
    };

  


// Random number generator to assign/pull a character based on the index of the character in finalRange
    var numRandom = Math.floor(Math.random()*finalRange.length);

// Selects a random index from the finalRange array - build password char by char 
    // var passwordLetter = 
    finalRange[numRandom];
    console.log(finalRange[numRandom]);  

// Adding the randomized letter to the finalPassword array add char to result
    console.log(result + finalRange[numRandom]);

// Loop that repeats until result.length = desired password length
    for(var i = result.length; i < passwordLength; i++) {
      var numRandom = Math.floor(Math.random()*finalRange.length);
      finalRange[numRandom];
      result = result + finalRange[numRandom];
      // console.log(result + finalRange[numRandom]);
    };

  return result;
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
