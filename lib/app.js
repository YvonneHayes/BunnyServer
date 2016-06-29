const express = require('express');
const app = module.exports = express();
const images = require('../routes/images');
const albums = require('../routes/albums');
const morgan = require('morgan');
const cors = require('./cors')('*');

app.use(morgan('dev'));
app.use(cors);

const public = __dirname + '/../public';
app.use(express.static(public));

app.use('/api/image', images);
app.use('/api/album', albums);
