/*const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.js');

const DB_NAME = 'lab-mongoose-movies';

//connecting to our database
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebrities = [
  {
    name: "Beyoncé",
    occupation: "Singer",
    catchPhrase: 'Big B and that B stands for bands'
  },
  {
    name: "Leonardo Dicaprio",
    occupation: "Actor",
    catchPhrase: 'End Global Warming!'
  },
  {
    name: "Jay-Z",
    occupation: "Business Man",
    catchPhrase: 'HOV!'
  }
]


Celebrity.create(celebrities)
.then(celebritiesFromDB => {
  console.log(`Created ${celebritiesFromDB.length} celebrities`);
  // Once created, close the DB connection
  mongoose.connection.close();
})
.catch(err => console.log(`An error occurred while creating celebrities from the DB: ${err}`));
*/

const mongoose = require('mongoose');
const Movie = require('../models/Movie.js');

const DB_NAME = 'lab-mongoose-movies';

//connecting to our database
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const movies = [
  {
    title: "Senhor dos Aneis",
    genre: "Fantasia",
    plot: 'Bue cenas'
  },
  {
    title: "Avatar",
    genre: "Ficção Cientifica",
    plot: 'Blue everywhere'
  },
  {
    title: "We're The Millers",
    genre: "Comedy",
    plot: 'best comedy film ever'
  }
]


Movie.create(movies)
.then(moviesFromDB => {
  console.log(`Created ${moviesFromDB.length} movies`);
  // Once created, close the DB connection
  mongoose.connection.close();
})
.catch(err => console.log(`An error occurred while creating movies from the DB: ${err}`));

