'use strict';

// dotenv
require('dotenv').config();

module.exports = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASS,
    PORT: process.env.DB_PORT,
    DB : process.env.DB
};