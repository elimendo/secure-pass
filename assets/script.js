
function generate(event) {
    event.preventDefault()
    const length = document.getElementById('length').value;
    const numbers = document.getElementById('numbers').value;
    const lowerCase = document.getElementById('lowercase').value;
    const symbols = document.getElementById('symbols').value;
    const upperCase = document.getElementById('uppercase').value;
    console.log('numbers')
   const password = generatePassword(parseInt(length), symbols, upperCase, lowerCase, numbers,)

    document.getElementById('output').innerHTML = password
};




function generatePassword(length, symbols, upperCase, lowerCase, numbers,) {
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

while(passwordArray.length < length){
    const character = characters[Math.floor(Math.random() * characters.length)];

    passwordArray.push(character)
}
return passwordArray.join('');
}