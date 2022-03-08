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
  movie.user = req.user;

  const resultado = await movieController.createMovie(movie, req.user);

  res.json(resultado);
  });
  
router.delete('/:id', async(req,res) => {
  const {id} = req.params;
  const result = await movieController.deleteMovie(id);
  res.json(result);
});



module.exports = router;