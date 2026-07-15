console.log("checking code execution");
let passwordLength = document.querySelector("#passwordLength")
let includeNumber = document.querySelector("#includeNumber")
let includeSymbol = document.querySelector("#includeSymbol")
let includeUppercase = document.querySelector("#includeUppercase")
let password1 = document.querySelector(".p1");
let password2 = document.querySelector(".p2");
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const symbol = "!@#$%^&*()_+-=[]{}|;:,.<>?";
function passCreater() {
    let passwordCollection = lowerCase
    let pass = ""
    let passLen = Number(passwordLength.value)
    if (includeUppercase.checked) {
        passwordCollection += uppercase
    }
    if (includeNumber.checked) {
        passwordCollection += number
    }
    if (includeSymbol.checked) {
        passwordCollection += symbol
    }
    for (let i = 0; i < passLen; i++) {
        let randomNumber = Math.floor(Math.random() * passwordCollection.length);
        pass += passwordCollection[randomNumber];
    }
    return pass
}
function generatePassword() {
    password1.textContent = passCreater();
    password2.textContent = passCreater();
}
// learned this from ai and wrote it myself
password1.addEventListener("click", function() {
    navigator.clipboard.writeText(password1.textContent)
    alert("Password copied!")
})
password2.addEventListener("click", function() {
    navigator.clipboard.writeText(password2.textContent)
    alert("Password copied!")
})
