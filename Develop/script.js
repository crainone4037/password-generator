var generateBtn = document.querySelector("#generate");


//all variables that hold the options for the password
var upperCase = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
var lowerCase = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
var specialCharacter = "!, @, #, %, $, *, (, )";
var number = "1,2,3,4,5,6,7,8,9";
//variable to store the final password
var randomNum =" ";








function generatePassword(){
  
  //series of four prompts to chose your preferences on the password 

var firstQuestion = window.prompt("how many characters would you like your password to be?");



if (firstQuestion < 8 || firstQuestion > 128) {
   window.alert("your password must be between 8-128 characters long");

 

}else{
 window.alert("your characters will be "   + firstQuestion +   " characters long");



}


var secondQuestion = confirm("would you like your password to have a special character?");

if (secondQuestion){
  window.alert (" your password will contain a special character");
 randomNum += specialCharacter;

  
 }else {
  window.alert("your password will not contain a special character");
}

var thirdQuestion = confirm("do you want lowercase characters in your passsword?");

if (thirdQuestion) {
  window.alert("your password will contain lowercase letters" );
  randomNum += lowerCase;

  



}else{
  window.alert("your password will not contain lowercase letters");
}

var fourthQuestion = confirm(" do you want your password to contain uppercase letters?");

if(fourthQuestion){ 
  window.alert("your password will contain uppercase letters");
  randomNum += upperCase;
 

}else{
  window.alert("your password will not contain uppercase letters");

}
var fifthQuestion = confirm(" would you like your password to include numbers?");

if (fifthQuestion){
  window.alert("your password will include numbers");
 randomNum += number;

}else{
  window.alert("your password will not include numbers");
}


//finalPassword variable will store the number given in first question
//it will then  display the random characters given from the prompts

for (var i=0; i<firstQuestion; i++){
  i = finalPassword;

  var finalPassword=randomNum.charAt(Math.floor(Math.random() * randomNum.length))
  

}
return finalPassword;







}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
