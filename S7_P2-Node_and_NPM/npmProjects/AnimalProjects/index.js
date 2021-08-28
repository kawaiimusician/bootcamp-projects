const animals = require('animals');
const Log = require('log.pets');

// Get random animal's name to appear in the console
console.log(animals());

// Get lion ascii art to appear in console
Log.lion();

// Get three animal names to appear in the Log.zoo banner
Log.zoo(animals(), animals(), animals());

// Display the number of animals in the generator
console.log(animals.words.length);

// function to determine if the animal's name starts with a G
function gAnimals(animal) {
    let firstChar = animal.substr(0, 1);
    if (firstChar == "g") {
        return animal
    }
}
// Assign the G animals to gNames
let gNames = animals.words.filter(gAnimals)

// Display the G names
console.log(gNames);

// Display the number of G animals
console.log(gNames.length)