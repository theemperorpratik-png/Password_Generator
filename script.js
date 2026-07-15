console.log("checking code execution");
let passwordLength = document.querySelector("#passwordLength")
let  includeNumber = document.querySelector("#includeNumber")
let  includeSymbol = document.querySelector("#includeSymbol")
let  includeUppercase = document.querySelector("#includeUppercase")
let password1 = document.querySelector(".p1");
let password2 = document.querySelector(".p2");
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const symbol = "!@#$%^&*()_+-=[]{}|;:,.<>?";
function passCreater() {
    let passwordCollection = lowerCase
    if (includeUppercase.checked) {
        passwordCollection += uppercase
    }
    if (includeNumber.checked) {
        passwordCollection += number
    }
    if (includeSymbol.checked) {
        passwordCollection += symbol
    }
    console.log(passwordCollection)
}
passCreater()