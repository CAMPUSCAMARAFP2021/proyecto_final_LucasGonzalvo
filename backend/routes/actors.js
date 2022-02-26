var express = require('express');
var router = express.Router();
const actorController = require('../controllers/Actor');

/* GET actors listing. */
router.get('/', async function(req, res, next) {
  const actors = await actorController.getActors();

  res.send(actors);
});

/* GET actor */
router.get('/:id', function(req, res, next) {
  res.send('Actors');
});

router.post('/',async(req, res, next)=>{
  const {actor} = req.body;
  const resultado = await actorController.createActor(actor);

  res.json(resultado);
  
})

router.post('/login',async(req, res, next)=>{
  const {actor} = req.body;
  ///const resultado = await actorController.createActor(actor);

  res.json('pendiente de hacer');
  
})

module.exports = router;
