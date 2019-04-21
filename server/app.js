var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const { notFound, errorHandler } = require('./middlewares');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// our routes go here..

app.get('/', (req, res) => {
    res.json({
        messag: "Welcome to Community API!"
    })
});
app.use(notFound);
app.use(errorHandler);

module.exports = app;
