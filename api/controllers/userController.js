var express = require('express');
var router = express.Router();
var db = require('mysql');
var models = require('../models');
var bcrypt = require('bcrypt');

create_book = function create_user (req, res) {
    console.log(req.body.username);
    var username = req.body.username;
    var password = req.body.password;
    var salt = 13;
    if (password !==null || username !== null) {
        var hash = bcrypt.hashSync(password, salt);
        var user = models.user.build({
            username: username,
            password: hash
        });

        user.save().then (function (user) {
            return user;
        })
            .catch(function (notUser) {
            console.log('there was an error');
            return 500;
        });
    }

};


function get_user_list(req, res) {

    models.user.findAll().then((returnValue) => {
        console.log(returnValue);
        return returnValue;
    });

}
module.exports = {
    create_user: create_book,
    get_user_list:get_user_list
};
