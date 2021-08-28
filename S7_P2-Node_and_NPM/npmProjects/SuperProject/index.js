const marvel = require("marvel-characters");

console.log(marvel());
console.log(marvel.characters.length);


function manNames(character) {
    let firstThree = character.substr(0, 3);
    if (firstThree == "Man") {
        return character
    }
}

console.log(marvel.characters.filter(manNames));

function ironMan(character) {
    if (character == "Iron Man") {
        return character
    }
}

console.log(marvel.characters.filter(ironMan));

function isBatman() {
    let batman = marvel.characters.indexOf("Batman");
    if (batman == -1) {
        return "No matches found"
    } else {
        return batman
    }
}

console.log(isBatman());