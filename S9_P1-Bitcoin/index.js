const express = require("express");
const app = express();
const $fetch = require('node-fetch');
const chalk = require('chalk');

const logger = require('morgan');
app.use(logger('dev'));

app.set("view engine", "ejs");
app.use(express.static('public'));

const baseUrl = 'https://api.coindesk.com/v1'
// https://api.coindesk.com/v1/bpi/currentprice.json

app.get('/', (req, res)=> {
    res.render('index');
})

app.get('/results', (req, res)=> {
    let route = 'bpi/currentprice.json';
    let endpoint = `${baseUrl}/${route}`;

    $fetch(endpoint)
    .then(response => {
        if(response.status === 200) {
            return response.json()
        } else {
            throw Error('JM did it!')
        }
    })
    .then(data => {
        console.log(data)
        res.render('results', {data: data, currencyQuery: req.query.currency})
    })
    .catch((err) => res.send(err.message));

});

app.get('*', (req, res)=> {
    res.send("I don't exist.")
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{console.log(chalk.green(`Running on port ${chalk.blue(PORT)}`))});