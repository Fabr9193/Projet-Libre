var db = require('mysql');

module.exports =  function connectDb() {
        return db.createConnection({
                host: "localhost",
                user: "root",
                password: "root",
                database: "auteurs"
            }
        );
};


