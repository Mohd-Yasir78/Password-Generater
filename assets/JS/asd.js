
let Box = document.getElementById("Password");



let lenght = 12;


let upperCase = "ABCDEFGHIJKLMNOPQRESTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrestuvwxyz";
let number = "0123456789";
let symbol = "@#$%^&*()_+~!}{[]:;></?";


let allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(lenght > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    Box.value = password;
};

function copyPassword(){
    Box.select();
    document.execCommand("copy");
};
