// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialCharacters = "@%+\/'!#$^?:.(){}[]~-_";
  var sourceOfPassward = "";
  let result = "";
  var minLength = 8;
  var maxLength = 128;
  var confirmLength = Number(window.prompt("How many characters do you want contain for your password? ", "enter number"));

  if (confirmLength >= minLength && confirmLength <= maxLength) {
    var confirmSpecial = confirm("Can you click OK to confirm including special characters? ");
    var confirmNumeric = confirm("Can you click OK to confirm including numeric characters?");
    var confirmLower = confirm("Can you click OK to confirm including lowercase characters?");
    var confirmUpper = confirm("Can you click OK to confirm including uppercase characters?");
    var confirmPassword = confirm("Would you like to make new password?");
    
    
    if (confirmSpecial === true ){
      sourceOfPassward += specialCharacters;
    }

    if (confirmNumeric === true ){
      sourceOfPassward += numbers;
    } 

    if (confirmLower === true ){
      sourceOfPassward += lowerLetters;
    }

    if (confirmUpper === true ){
      sourceOfPassward += upperLetters;
    }
    

    if (confirmSpecial === false && confirmNumeric=== false && confirmLower=== false && confirmUpper === false){
        alert("You should select at least one character type!")
        return passwordText.value = '';
      }

    if (confirmPassword === true){
        for (let i = 0; i < confirmLength; i++) {
        result +=  sourceOfPassward[(Math.floor(Math.random() * sourceOfPassward.length))];
        }
      } else {
        alert("After OK, please click 'Generate Password' again!")
        return;
      }

  } else {
      alert("Press number more than at least 8 and less than 128.")
      
    }
  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
