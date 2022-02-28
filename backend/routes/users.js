var express = require('express');
var router = express.Router();
const userController = require('../controllers/User');
const moviesRouter = require('./movies')
/* GET users listing. */
router.get('/', async function(req, res, next) {
      const users = await userController.getUsers();

  res.json(users);
});

/* GET USER */
router.get('/:userId', function(req, res, next) {
  const {userId} = req.params;
  const user = await userController.getUser(userId);

  res.json(user);
});

router.post('/',async(req, res, next)=>{
  const {user} = req.body;
  const result = await userController.createUser(user);

  res.json(result);
  
})

router.use('/:userId/movies', function(req, res, next){

},moviesRouter);

router.post('/login',async(req, res, next)=>{
 const user = req.body;
 const {name, password} = user;
 const result = await userController.login(name, password);
 res.json (result);
})



  module.exports = router;