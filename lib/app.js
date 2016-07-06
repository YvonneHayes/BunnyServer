const express = require('express');
const app = module.exports = express();


const morgan = require('morgan');
const cors = require('./cors')('*');
const ensureAuth = require('./ensureAuth');

// routes
const auth = require('../routes/auth');
const images = require('../routes/images');
const albums = require('../routes/albums');



app.use(morgan('dev'));
app.use(cors);

const public = __dirname + '/../public';
app.use(express.static(public));

app.use('/api', auth);
app.use('/api/image', ensureAuth, images);
app.use('/api/album', ensureAuth, albums);

app.use((err, req, res, next) => {
  console.error(err);
  next.beQuietLint = true;
  res.status(err.code||500).json({error: err.error || 'Server error', msg: err.msg});
});
