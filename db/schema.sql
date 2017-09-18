create database burgers_db;

use burgers_db;

drop table if exists burgers_db.burgers; 

create table burgers (

	id int not null auto_increment,
    
    burger_name varchar(30),
    
    devoured boolean default false,
    
    date timestamp,
    
    primary key(id)
    
    );
    