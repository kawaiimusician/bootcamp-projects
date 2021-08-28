const express = require('express');
const app = express();
const chalk = require('chalk');

const logger = require('morgan');
app.use(logger('dev'));

app.set("view engine", "ejs");

// Data
let messages = [
    {name: "Jim", message: "Hi, how are you?"},
    {name: "Jane", message: "How about pasta for dinner?"},
    {name: "Gary", message: "I like my pasta with butter."}
]

//Route Handlers
app.get('/', (req, res)=> {
    res.send("I am root")
});

app.get('/messages', (req, res)=> {
    res.render("messages", {data: messages})
});

app.get('*', (req, res)=> {
    res.send("I don't exist.")
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(chalk.green(`Listening on port ${chalk.blue(PORT)}`)));
