// I was able to build this without looking on my 3rd try!

const express = require("express");
const app = express();
const logger = require('morgan');
const chalk = require('chalk');

app.use(logger('dev'));

app.get('/', (req, res)=>{
    res.send("I am the root route!");
});

app.get('*', (req, res)=>{
    res.send("This page does not exist.")
})

let PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`App is running on port ${PORT}`))