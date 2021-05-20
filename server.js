// Require express
const express = require('express');

// Require Middleware
const logger = require('./middleware/logger');

// init express
const app = express();

// app level middleware ==> global middlewares
app.use(logger);

// parse the data
app.use(express.json());

// Serve the static files
app.use(express.static(__dirname + '/public'));

// Starting the server
const port = 5000;
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`the server is running on port ${port}...`);
});
