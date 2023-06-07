const express = require('express');
const router = express.Router();

const AboutController = require('./AboutController');

router.get('/', AboutController.About);

module.exports = router;
