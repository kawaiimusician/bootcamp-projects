const express = require("express");
const app = express();
const logger = require("morgan");
const chalk = require("chalk");
const pokemon = require("pokemon")

app.use(logger('dev'));

// Root Pokemon Route
app.get("/", (req, res)=> {
    res.send("I am the Pokemon root route!")
});

// /pokemon route - sends back random pokemon.
app.get("/pokemon", (req, res)=> {
    let randPoke = pokemon.random();
    res.send(randPoke);
});

// /dex route - send back an array of 5 pokemon
app.get("/dex", (req, res)=> {
    let pokeArray = []
    for (var i = 0; i < 5; i++) {
        pokeArray.push(pokemon.random());
    }
    res.send(pokeArray);
});

// /pokemon/dex responds with an array of 5 pokemon but with an object that includes name, attack, and defense.
app.get("/pokemon/dex", (req, res)=> {
    pokeArray = []
    for (var i = 0; i < 5; i++) {
        let pokeObject = {}
        function getRandomNum(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }
        pokeObject.pokemon = pokemon.random();
        pokeObject.attack = getRandomNum(50, 100);
        pokeObject.defense = getRandomNum(0, 100);
        pokeArray.push(pokeObject);
    }
    res.send(pokeArray);
});

// /battle - sends back a "winner" and a "loser"
app.get("/battle", (req, res)=> {
    pokeArray = []
    for (var i = 0; i < 2; i++) {
        let pokeObject = {}
        function getRandomNum(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }
        pokeObject.pokemon = pokemon.random();
        pokeObject.attack = getRandomNum(50, 100);
        pokeObject.defense = getRandomNum(0, 100);
        pokeArray.push(pokeObject);
    };
    let [winner, loser] = pokeArray[0].attack > pokeArray[1].attack ? [pokeArray[0], pokeArray[1]] : [pokeArray[1], pokeArray[0]]
    res.send(`And the winner is ${winner.pokemon} with an attack of ${winner.attack} and a defense of ${winner.defense} versus ${loser.pokemon} with an attack of ${loser.attack} and a defense of ${loser.defense}. Congrats ${winner.pokemon}!`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(chalk.green(`Running on port ${PORT}.`)));
