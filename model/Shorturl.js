const mongoose = require('mongoose');

const linkSchema = mongoose.Schema({
  url: { type: String, required: true },
  shorturl: { type: String },
  code: { type: String },
});

module.exports = mongoose.model('Link', linkSchema);
