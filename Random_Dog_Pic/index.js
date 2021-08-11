const express = require('express');
const app = express();
const chalk = require('chalk');
const needle = require('needle')

const logger = require('morgan');
app.use(logger('dev'));
app.set("view engine", "ejs");
app.use(express.static('public'));

let image = `https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_117.jpg`
// https://dog.ceo/api/breeds/image/random
// https://dog.ceo/api/breed/spaniel/blenheim/images/random
const baseUrl = `https://dog.ceo/api`

app.get("/", (req, res)=> {
    res.render('index', {image});
});

app.get('/getImage', (req, res)=> {
    let route = `breed/spaniel/blenheim/images/random`
    let endpoint = `${baseUrl}/${route}`
    // Make the call - go to the end point
    needle.get(endpoint, (error, response)=> {
        // They all get some sort of response - good = data, bad = error
        if(!error && response.statusCode === 200) {
            // parse and do something with that data
            res.render('index.ejs', {image: response.body.message})
        } else {
            // error handling
            res.render('error.ejs', {error: "Something doggone weird happen!!!"})
        }
    });
});

app.get("*", (req, res)=> {
    res.send("I don't exist.")
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(chalk.green(`Running on port ${chalk.blue(PORT)}`)));