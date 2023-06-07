const express = require('express');
const router = express.Router();

const ContactController = require('./ContactController');

router.get('/', ContactController.Contact);

module.exports = router;
