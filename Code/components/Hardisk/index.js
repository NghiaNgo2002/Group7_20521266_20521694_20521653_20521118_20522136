const express = require('express');
const router = express.Router();

const HardiskController = require('./HardiskController');

router.get('/', HardiskController.Hardisk);

module.exports = router;
