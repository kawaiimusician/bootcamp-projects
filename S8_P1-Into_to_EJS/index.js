const express = require("express");
const app = express();
const logger = require("morgan");
const chalk = require("chalk");

app.use(logger('dev'));
app.set("view engine", "ejs");

let pizza = "I like my pizza with extra pineapple.";
let cappuccino = "I like my cappuccino to be sweet."
let fries = "I like my fries crispy with extra salt."

app.get("/", (req, res)=> {
    res.render("home", {pizza});
});

app.get("/about", (req, res)=> {
    res.render("about", {cappuccino});
});

app.get("/contact", (req, res)=> {
    res.render("contact", {fries});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(chalk.green(`Running on port ${chalk.blue(PORT)}`)));