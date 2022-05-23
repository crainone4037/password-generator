var generateBtn = document.querySelector("#generate");

var numberOption = ["0","1","2","3","4","5","6","7","8"];
  var specialCharacter = ["!", "@" , "#", "$", "*" , "&"];
  var lowerCaseLetter = ["a", "b" , "c", "d" , "e" , "f", "g", "h", "i", "j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var UpperCaseLetter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];




function generatePassword(){
  var firstQuestion = window.prompt("how many characters would you like your password to be?");
  

if (firstQuestion < 8 || firstQuestion > 128) {
   window.alert("your password must be between 8-128 characters long");
 

}else{
 window.alert("your characters will be "   + firstQuestion +   " characters long");


}

var secondQuestion = confirm("would you like your password to have a special character?");

if (secondQuestion){
  window.alert (" your password will contain a special character");


}else {
  window.alert("your password will not contain a special character");
}

var thirdQuestion = confirm("do you want lowercase characters in your passsword?");

if (thirdQuestion) {
  window.alert("your password will contain lowercase letters" );
}else{
  window.alert("your password will not contain lowercase letters");
}

var fourthQuestion = confirm(" do you want your password to contain uppercase letters?");

if(fourthQuestion){ 
  window.alert("your password will contain uppercase letters");

}else{
  window.alert("your password will not contain uppercase letters");

}
var fifthQuestion = confirm(" would you like your password to include numbers?");

if (fifthQuestion){
  window.alert("your password will include numbers");
}else{
  window.alert("your password will not include numbers");
}







}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
