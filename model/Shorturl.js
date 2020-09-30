const mongoose = require('mongoose');
const shortid = require('shortid');

const linkSchema = mongoose.Schema({
  url: { type: String, required: true },
  shorturl: { type: String, default: shortid.generate() },
});

module.exports = mongoose.model('Link', linkSchema);
