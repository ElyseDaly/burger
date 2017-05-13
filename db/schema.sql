CREATE DATABASE burger_bd;

USE burger_bd;

CREATE TABLE burgers (
id INTEGER auto_increment not null,
burger_name VARCHAR(50),
devoured BOOLEAN,
date DATETIME DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);