const express = require('express');
const Album = require('../models/album');
const router = express.Router();
const bodyParser = require('body-parser').json();

router
  .get('/', (req, res) => {
    Album.find()
      .lean()
      .then(results => res.json(results))
      .catch(err => res.status(500).json({error: {message: 'Unable to find records',reason: err}}));

  })
  .post('/', bodyParser, (req, res) => {
    new Album(req.body).save()
      .then(result => res.send(result))
      .catch(err => res.status(500).json({error: {message: 'Unable to find record', reason: err}}));
  })
  .post('/', bodyParser, (req, res) => {
    new Album(req.body)
      .save()
      .then(result => res.json(result))
      .catch(err => res.status(500).json({error: {message: 'Unable to create record', reason: err}}));
  });

module.exports = router;
