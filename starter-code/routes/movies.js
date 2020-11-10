const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

router.get('/movies', (req, res) => {
  //Get books from Mongo and pass them to the view
    Movie.find()
    .then((allTheMoviesFromDB) => {
      res.render('movies/index', { movies: allTheMoviesFromDB});
    })
    .catch((err) => {
      res.render('error', { err });
    })
});

router.post('/movies', (req, res) => {
  let { title, genre, plot } = req.body;
  Movie.create({
    title,
    genre,
    plot
  })
  .then(() => {
    res.redirect('/movies');
  })
  .catch((err) => {
    res.render('error', 'movies/new');
  });
});

router.get('/movies/new', (req, res) => {
res.render('movies/new')

});


router.post("/movies/:id/delete", (req, res,) => {
  
 Movie.findByIdAndRemove(moviesId)
  .then(() => {
    res.redirect(`/movies`);
  })
  .catch((err) => {
      res.render('error', { err });
    });
});



router.get('/movies/:moviesId', (req, res,) => {
  let moviesId = req.params.moviesId;

 Movie.findById(moviesId)
    .then((theMovieFound) => {
      res.render('movies/show', {movie : theMovieFound});
    });
  });


module.exports = router