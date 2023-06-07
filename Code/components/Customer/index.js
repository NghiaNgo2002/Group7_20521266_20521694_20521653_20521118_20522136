const express = require('express');
const router = express.Router();

const CustomerController = require('./CustomerController');

router.get('/', CustomerController.Customer);

module.exports = router;
