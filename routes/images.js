const express = require('express');
const Image = require('../models/image');
const router = express.Router();
const bodyParser = require('body-parser').json();

router
  .get('/', (req, res) => {
    Image.find()
      .lean()
      .then(results => res.json(results))
      .catch(err => res.status(500).json({error: {message: 'Unable to find records',reason: err}}));
  })
  .get('/:id', (req, res) => {
    Image.findById(req.params.id)
      .lean()
      .then(result => result ? res.json(result) : res.json({error:{ message: 'Entry not found'}}))
      .catch(err => res.status(500).json({error: {message: 'Unable to find record', reason: err}}));
  })
  .post('/', bodyParser, (req, res) => {
    new Image(req.body)
      .save()
      .then(result => res.json(result))
      .catch(err => res.status(500).json({error: {message: 'Unable to create record', reason: err}}));
  });

module.exports = router;
