var express = require('express');
var router = express.Router();
var controller = require('../controllers/bookController');


/* GET users listing. */
router.get('/', function(req, res, next) {

    var userList = controller.get_book_list(req, res);
    if (userList === null)
    {
        res.status(500).send('Somthing broke !');
    }
    else {
        res.send(userList);
    }
});

router.post('/', function (req, res, next){
    var newUser = controller.create_book(req, res);
    console.log(newUser);
    if (newUser !== 500) {
        res.send(newUser);
    }
    else {
        res.status(500).send('Something went wrong : check your input');
    }
});

router.get('/:testId', function(req, res, next) {
    res.send('respond with a resource' + req.params.testId);
});



module.exports = router;
