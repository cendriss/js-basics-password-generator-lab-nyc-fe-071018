window.addEventListener("load", () => {
  //start your code here
let outputResult = document.querySelector("output")
let lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz".split('')
let upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
let numberCharacters = "0123456789"
let specialCharacters ="!#$%&()*+,-./:;<=>?@[\\]^_{|}~"

  
  document.addEventListener('submit' , (event) => {
    //stay on the same page
event.preventDefault();
    
    
    let input = document.getElementById("passwordLength")
    let passwordLength = input.value
    
    
  })
});
