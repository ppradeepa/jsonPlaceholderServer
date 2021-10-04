
'use strict';
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const routes = require("./routes");
const dotenv = require('dotenv').config();

/* setting up the express app engine */
const app = express();
app.use(cors());
/* returns middleware that only parses urlencoded bodies */
app.use(bodyParser.json());
/* setting up the routes */
app.use(routes);


module.exports = app;