const express = require('express');
const app = module.exports = express();
const Bunny = require('./lib/bunnies');
const bodyParser = require('body-parser').json();

app.use(express.static(__dirname+'/public'));

app.get('/api/bunny', (req, res) => {
  Bunny.find()
    .lean()
    .then(results => res.json(results))
    .catch(err => {
      console.log('got here');
      res.status(500).json({
        msg: 'unable to find bunnies',
        error: err
      });
    });
});

app.post('/api/bunny', bodyParser, (req, res) => {
  new Bunny(req.body).save()
    .then(result => res.send(result))
    .catch(err => {
      console.log(err);
      res.json({err});
    });
});
