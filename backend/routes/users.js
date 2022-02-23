var express = require('express');
var router = express.Router();
const userController = require('../controllers/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/',async(req, res, next)=>{
  const {user} = req.body;
  const resultado = await userController.createUser(user);

  res.json(resultado);
  
})

router.post('/login',async(req, res, next)=>{
  const {user, password} = req.body;
  //const resultado = await userController.createUser(user);

  res.json('pendiente de hacer');
  
})

module.exports = router;
