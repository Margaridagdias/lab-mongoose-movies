const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/celebrities', (req, res, next) => {
  //Get books from Mongo and pass them to the view
  Celebrity.find()
    .then((allTheCelebritiesFromDB) => {
      res.render('celebrities/index', { celebrities: allTheCelebritiesFromDB});
    })
    .catch((err) => {
      res.render('error', { err });
    })
});

router.post('/celebrities', (req, res) => {
    let { name, occupation, catchPhrase } = req.body;
    Celebrity.create({
      name,
      occupation,
      catchPhrase
    })
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((err) => {
      res.render('error', 'celebrities/new');
    });
});

router.get('/celebrities/new', (req, res) => {
  res.render('celebrities/new')

});

router.post("/celebrities/:id/delete", (req, res,) => {
  
  Celebrity.findByIdAndRemove(celebritiesId)
  .then(() => {
    res.redirect(`/celebrities`);
  })
  .catch((err) => {
      res.render('error', { err });
    });
});

router.get('/celebrities/:celebritiesId', (req, res,) => {
  let celebritiesId = req.params.celebritiesId;

  Celebrity.findById(celebritiesId)
    .then((theCelebrityFound) => {
      res.render('celebrities/show', {celebrity : theCelebrityFound});
    });
  });



module.exports = router