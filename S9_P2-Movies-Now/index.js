const express = require('express');
const app = express();
const chalk = require('chalk');
const $fetch = require('node-fetch');
const key = require('./config/keys');

const logger = require('morgan');
app.use(logger('dev'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

const baseUrl = 'https://api.themoviedb.org/3'

app.get('/', (req, res)=> {
    res.render("home")
});

app.get('/results', (req, res)=> {
    let route = `movie/now_playing?api_key=${key.tmdb_key}&language=en-US&page=1&region=US`
    let endpoint = `${baseUrl}/${route}`;
    $fetch(endpoint)
    .then(response => {
        if(response.status === 200) {
            return response.json()
        } else {
            throw Error('Something went wrong.')
        }
    })
    .then(data => {
        console.log(data.results)
        res.render('results', {movies: data.results})
    })
    .catch(err => console.error('There is an error', err))
})

app.get('*', (req, res)=> {
    res.send("i don't exist.")
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {console.log(chalk.green(`Listening on port ${chalk.blue(PORT)}`))});