const express = require('express');
const router = express.Router();

const shortUrlController = require('../controller/shorturl');

router.post('/create', shortUrlController.sortUrl);
router.get('/:shorturl', shortUrlController.redirect);

module.exports = router;
