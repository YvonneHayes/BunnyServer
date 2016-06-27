const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Bunny', new Schema( {
  title: {
    type: String
  },
  url: {
    type: String
  },
  description: {
    type: String
  }
}));
