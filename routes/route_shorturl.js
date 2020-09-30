const express = require('express');
const router = express.Router();

const shortUrlController = require('../controller/shorturl');

router.post('/', shortUrlController.sortUrl);

module.exports = router;
