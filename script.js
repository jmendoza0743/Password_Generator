// Assignment Code
generateBtn = document.querySelector("#generate");
var lowercaseLetter = 'qwertyuiopasdfghjklzxcvbnm';
var uppercaseLetter = 'QWERTYUIOPASDFGHJKLZXCVBNM';
var numberList = '1234567890';
var specialCharacterList = '!@#$%^&*()_+';
// var characters = lowercaseLetter + uppercaseLetter + numberList + specialCharacterList

// Write password to the #password input
function writePassword() {

  var characters = ``

 var length = prompt(`How long do you want your password to be? Must be a minimum of 8 characters and a maximum of 128 characters`)
 if(length > 7 && length < 129){
   var lowercase = confirm(`Do you want password to contain lowercase letters?`)
   var uppercase = confirm(`Do you want password to contain uppercase letters?`)
   var numbers = confirm(`Do you want password to contain numbers?`)
   var specialCharacter = confirm(`Do you want password to contain special characters?`)
  
 }
 else {
   alert(`Password must contain at between 8 and 128 characters!`)
 }


  if ( lowercase == true){ characters = characters + lowercaseLetter}
  if ( uppercase == true){ characters = characters + uppercaseLetter}
  if ( numbers == true ){ characters = characters + numberList}
  if (specialCharacter == true  ) {characters = characters + specialCharacterList}

  else {
    alert(`At least 1 Caracter Type Should be Selected!`)
  }
  



 function generatePassword(){
 
   var result           = '';
   
   var charactersLength = characters.length;
   
   for ( var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   
   
   return result;
}

 //define//
 var password = generatePassword()
   
 
 var passwordText = document.querySelector("#password");
 
 
  
 passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);