DROP DATABASE IF EXISTS TodoList;

CREATE DATABASE TodoList;

USE TodoList;

CREATE TABLE
    tasks (
        id INT NOT NULL auto_increment,
        name VARCHAR(50) NOT NULL,
        status VARCHAR(50) NOT NULL,
        PRIMARY KEY(id)
    ) ENGINE = INNODB;