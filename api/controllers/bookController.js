var express = require('express');
var router = express.Router();
var db = require('mysql');
var models = require('../models');
var bcrypt = require('bcrypt');

create_new_book = function create_book (req, res) {
    var title = req.body.title;
    var synopsis = req.body.synopsis;
    var content = req.body.content;
    var authorId = req.body.authorId;
    console.log(req.body);
    if (title !== null || content !== null) {
        var book = models.book.build({
            title: title,
            synopsis: synopsis,
            content:content,
            author:authorId
        });
   book.save().then (function (book) {
            return book;
        })
            .catch(function (notBook) {
                console.log('there was an error');
                return 500;
            });
    }
};


function get_book_list(req, res) {
    models.book.findAll().then(function(books) {
        console.log(books);
        return (books);
    });

}
module.exports = {
    create_book: create_new_book,
    get_book_list:get_book_list
};
