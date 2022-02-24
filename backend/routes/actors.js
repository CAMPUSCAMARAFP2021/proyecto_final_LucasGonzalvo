var express = require('express');
var router = express.Router();
const actorController = require('../controllers/Actor');

/* GET actors listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/',async(req, res, next)=>{
  const {actor} = req.body;
  const resultado = await actorController.createActor(actor);

  res.json(resultado);
  
})

router.post('/login',async(req, res, next)=>{
  const {actor} = req.body;
  //const resultado = await actorController.createUser(actor);

  res.json('pendiente de hacer');
  
})

module.exports = router;
