CREATE DATABASE cars

CREATE TABLE cars_numbers(
plate_number VARCHAR(6) UNIQUE NOT NULL,
owner_name VARCHAR(100) NOT NULL
)