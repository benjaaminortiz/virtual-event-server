CREATE DATABASE invites;

CREATE TABLE attendants (
    id SERIAL PRIMARY KEY,
    name varchar(255),
    lastName varchar(255),
    email varchar(255),
    country varchar(255),
    phoneNum varchar(255),
    role varchar(255)
);


