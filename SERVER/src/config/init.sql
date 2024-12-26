-- Active: 1729549434613@@127.0.0.1@5432@softjobs
CREATE DATABASE softjobs;

CREATE TABLE usuarios (
    id SERIAL,
    email VARCHAR(50) NOT NULL, 
    password VARCHAR(60) NOT NULL, 
    rol VARCHAR(25), 
    lenguage VARCHAR(20),
    PRIMARY KEY (id)
);

SELECT * FROM usuarios;