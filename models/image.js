const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Image', new Schema( {
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  album: {
    type: Schema.Types.IbjectId,
    ref: 'Album',
    required: true
  }
}));
