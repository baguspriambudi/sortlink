const Sortlink = require('../model/Shorturl');
const validUrl = require('valid-url');
const shortid = require('shortid');

exports.sortUrl = async (req, res, next) => {
  try {
    const url = req.body.url;
    const shortUrl = shortid.generate();
    const result = await new Sortlink({
      url: url,
      shorturl: shortUrl,
    }).save();
    res.status(200).json({
      msg: 'success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

exports.redirect = async (req, res, next) => {
  try {
    const findUrl = await Sortlink.findOne({ shorturl: req.params.shorturl });
    if (!findUrl) {
      return res.status(404).json({
        msg: 'url not found',
      });
    }
    res.redirect(findUrl.url);
  } catch (error) {
    next(error);
  }
};
