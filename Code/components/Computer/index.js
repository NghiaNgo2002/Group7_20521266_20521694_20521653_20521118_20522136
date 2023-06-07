const express = require('express');
const router = express.Router();

const ComputerController = require('./ComputerController');

router.get('/', ComputerController.Computer);

module.exports = router;