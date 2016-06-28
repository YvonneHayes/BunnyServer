const express = require('express');
const app = module.exports = express();
const images = require('../routes/images');
const albums = require('../routes/albums');
const morgan = require('morgan');
const cors = require('./cors')('*');

app.use(morgan('dev'));
app.use(cors);
app.use(express.static(__dirname+'/public'));

app.use('/api/image', images);
app.use('/api/album', albums);
