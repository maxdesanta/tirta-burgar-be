'use strict';

/* inisiasi dotenv */
require('dotenv').config();

/* inisiasi express */
const express = require('express');
const app = express();

/* inisasi router */
const { router } = require('./router/router');

/* inisiasi cors */
const cors = require('cors');
// const bodyParser = require('body-parser');

/* call port */
const port = process.env.PORT || 3000;

/* cors option origin */
let originOptionCors = {
    origin: `http://localhost:${port}`
}

// middleware
app.use(cors());
// app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

/* call router */
app.use('/', router);

/* listen port */
app.listen(port, () => console.log(`connected ${port}`));