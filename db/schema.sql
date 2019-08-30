-- Drops the burgers_db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "burgers_db" database --
CREATE DATABASE burgers_db;

-- Makes it so all of the following code will affect burgers_db --
USE burgers_db;

-- Creates the table "burgers" within burgers_db --
CREATE TABLE burgers (
    -- id auto increment for burgers --
    id INTEGER NOT NULL AUTO_INCREMENT,
    -- Makes a string column  --
    burger_name VARCHAR (100) NOT NULL,
    -- Makes a boolean column  --
    devoured BOOLEAN DEFAULT false,
    -- Primary key --
    PRIMARY KEY (id)
);

SELECT * FROM burgers;