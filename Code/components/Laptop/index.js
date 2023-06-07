const express = require('express');
const router = express.Router();

const LaptopController = require('./LaptopController');

router.get('/', LaptopController.Laptop);

module.exports = router;