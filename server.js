// Dependencies
const express = require('express');
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

const app = express();

// Port
const PORT = process.env.PORT || 3000;