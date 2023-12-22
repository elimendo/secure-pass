

function generatePassword(length, symbols, upperCase, lowerCase, numbers, noDuplicates) {
let characters = "";

if (numbers) {
    characters +="0123456789"
}

if (lowerCase) {
    characters +="abcdefghijklmnopqrstuvwxyz"
}

if (upperCase) {
    characters +="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}

if (symbols) {
    characters +="!@#$%&*()+?>"
}

let passwordArray = [];
}