var connection	= require('../config/connection.js');

var orm = {
    //Coding for selectAll() function
    selectAll: function(){
    
        var sql = 'select * from burgers';
        connection.query(sql, function(err,result){

        });
    },

    //Coding for insertone() function
    insertOne: function(){

        var sql = 'insert into burgers(burger_name)';
        connection.query(sql, function(err,result){
        
        });
    },

    //Coding for Updateone() function
    updateOne: function(){

        var sql = 'UPDATE users SET ? WHERE UserID = ?'
        connection.query(sql, function(err,result){
        
        });
    }
};

module.exports = orm; 