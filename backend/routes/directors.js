var express = require('express');
var router = express.Router();
const directorController = require('../controllers/Director');

/* GET directors listing. */
router.get('/', async function(req, res, next) {
  const directors = await directorController.getDirectors();

  res.send(directors);
});

/* GET director */
router.get('/:id', function(req, res, next) {
  res.send('Directors');
});

router.post('/',async(req, res, next)=>{
  const {director} = req.body;
  const resultado = await directorController.createDirector(director);

  res.json(resultado);
  
})

router.post('/login',async(req, res, next)=>{
  const {director} = req.body;
  ///const resultado = await directorController.createDirector(director);

  res.json('pendiente de hacer');
  
})

module.exports = router;

