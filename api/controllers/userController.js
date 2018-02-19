var express = require('express');
var router = express.Router();
var db = require('mysql');


/* GET users listing. */
router.get('/', function(req, res, next) {
        var result = '';
        var con = connectDb();
        console.log(con);
    con.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
        if (err) throw err;
        result = rows[0];
    });
    res.send('respond with a resource'  + result);
});

function connectDb() {
    return db.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database: "auteurs"
        }
    ).connect();
}


exports.create_user = function (req, res) {
    var db = connectDb();

}
module.exports = router;
