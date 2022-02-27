var express = require('express');
var router = express.Router();
const userController = require('../controllers/User');

/* GET users listing. */
router.get('/', async function(req, res, next) {
      const users = await userController.getUsers();

  res.send(users);
});

/* GET USER */
router.get('/:id', function(req, res, next) {
  res.send('Users');
});

router.post('/',async(req, res, next)=>{
  const {user} = req.body;
  const resultado = await userController.createUser(user);

  res.json(resultado);
  
})

router.post('/login',async(req, res, next)=>{
 const user = req.body;
 const {name, password} = user;
 const result = await userController.login(name, password);
 res.json (result);
})

module.exports = router;