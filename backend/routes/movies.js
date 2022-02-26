var express = require('express');
var router = express.Router();
const movieController = require('../controllers/Movie');

/* GET movies listing. */
router.get('/',  async function(req, res, next) {
     const movies = await movieController.getMovies();
    
  res.send(movies);
});

/* GET movie */
router.get('/:id', function(req, res, next) {
    res.send('Movies');
  });

router.post('/',async(req, res, next)=>{
  const {movie} = req.body;
  const resultado = await movieController.createMovie(movie);

  res.json(resultado);
  
})

router.post('/login',async(req, res, next)=>{
  const {movie, password} = req.body;
  //const resultado = await movieController.createmovie(movie);

  res.json('pendiente de hacer');
  
})

module.exports = router;
