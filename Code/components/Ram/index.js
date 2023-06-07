const express = require('express');
const router = express.Router();

const RamController = require('./RamController');

router.get('/', RamController.Ram);

module.exports = router;
