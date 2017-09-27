var mysql = require('mysql');

// var connection = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'burgers_db'
// });

if (process.env.CLEARDB_DATABASE_URL) { // if you are using clearDB - you will use the cleardb url - see the config vars
    // We are in production
    connection= mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE_NAME
    });
} else {
    // We are in a local environment
    connection = mysql.createConnection({
        host: "localhost",
        user: "bb03b69f87c69c",
        password: "2eb609c6",
        database: "heroku_d3d4e2bebcc870d"
    });
}; 

connection.connect(function(err){
    if(err){
        console.error("connecting Error: " + err.stack);
        return;
    }else{
        console.log("connected as id " + connection.threadId);
    }
        
});

module.exports = connection;

