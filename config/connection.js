var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'burgers_db'
});

connection.connect(function(err){
    if(err){
        console.error("connecting Error: " + err.stack);
        return;
    }else{
        console.log("connected as id " + connection.threadId);
    }
        
});

module.exports = connection;

