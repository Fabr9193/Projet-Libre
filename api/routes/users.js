var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController');
var models = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {

    models.user.findAll().then((users) => {
        res.send(users);

        })

  // res.send('respond with a resource');
});

router.post('/', function (req, res, next){
  var newUser = controller.create_user(req, res);
  res.send(newUser);
});

router.get('/:testId', function(req, res, next) {
  res.send('respond with a resource' + req.params.testId);
});



module.exports = router;
