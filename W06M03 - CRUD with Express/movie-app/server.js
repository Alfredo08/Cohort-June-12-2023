const express = require('express');
const morgan = require('morgan');
const {uid} = require('uid');

const PORT = 8080;

const movieList = [{
    id : '1',
    title : 'The Godfather',
    director : 'Francis Copolla'
},
{
    id : '2',
    title : 'Lost in translation',
    director : 'Sofia Copolla'
}];

const app = express();
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.urlencoded({extended : true}));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/api/movies', (req, res) => {
    const templateVars = {
        movieList : movieList
    };
    res.render('movies', templateVars);
});

app.get('/api/movie/form', (req, res) => {
    res.render('new-movie');
});

app.get('/api/movie/:movieId', (req, res) => {
    const movieId = req.params.movieId;
    const foundMovie = movieList.find((movie) => {
        if(movie.id === movieId){
            return movieId;
        }
    });
    const templateVars = {
        movie : foundMovie,
        issue : false
    }
    if(!foundMovie){
        templateVars.issue = "This movie doesn't exists!";
    }
    console.log( templateVars );
    res.render('movie-detail', templateVars);
});

app.get('/api/movie/edit/:movieId', (req, res) => {
    const movieId = req.params.movieId;
    const foundMovie = movieList.find((movie) => {
        if(movie.id === movieId){
            return movieId;
        }
    });
    const templateVars = {
        movie : foundMovie
    }
    res.render('edit-movie', templateVars);
});

app.post('/api/new/movie', (req, res) => {
    const newMovie = req.body;
    newMovie.id = uid(3);
    console.log( newMovie);
    movieList.push(newMovie);
    res.redirect('/api/movies');
});

app.post('/api/edit/movie/:movieId', (req, res) => {
    const movieId = req.params.movieId;
    for(let i = 0; i < movieList.length; i ++){
        if(movieList[i].id === movieId){
            movieList[i].title = req.body.title;
            movieList[i].director = req.body.director;
        }
    }
    res.redirect(`/api/movie/${movieId}`);
});

app.post('/api/delete/movie/:movieId', (req, res) => {
    const movieId = req.params.movieId;
    const movieIndex = movieList.findIndex((movie) => {
        if(movieId === movie.id){
            return movie;
        }
    });
    movieList.splice(movieIndex, 1);
    res.redirect('/api/movies');
});

app.listen(PORT, () => {
    console.log(`This server is running in port ${PORT}.`);
});

// http://localhost:8080/