const Sortlink = require('../model/Shorturl');
const validUrl = require('valid-url');

exports.sortUrl = async (res, req, next) => {
  try {
    const url = req.body.url;

    if (!validUrl.isUri(baseUrl)) {
      return res.status(401).json({
        msg: 'invalid url',
      });
    }
    const result = await new Sortlink({
      url: url,
      shortrl: shortUrl,
    }).save();
    res.status(200).json({
      msg: 'success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
