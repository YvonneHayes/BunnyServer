const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Album', new Schema( {
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
}));
