-- Created the DB "wizard_schools_db" (only works on local connections)
CREATE DATABASE burgers_db;
USE burgers_db;

-- Created the table "schools" 
CREATE TABLE burgers (
  id int AUTO_INCREMENT,
  burger_name varchar(30) NOT NULL,
  devoured boolean,
  PRIMARY KEY(id)
);

