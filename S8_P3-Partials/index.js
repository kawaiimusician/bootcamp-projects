const express = require('express');
const app = express();
const chalk = require('chalk');

const logger = require('morgan');
app.use(logger('dev'));
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get('/', (req, res)=> {
    res.render("home");
});

app.get('/about', (req, res)=> {
    res.render("about");
});

app.get('/contact', (req, res)=> {
    res.render("contact");
});

app.get('*', (req, res)=> {
    res.send("I don't exist.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(chalk.green(`Running on port ${chalk.blue(PORT)}`)));
