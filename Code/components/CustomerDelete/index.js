const express = require('express');
const router = express.Router();

const CustomerDeleteController = require('./CustomerDeleteController');

router.get('/', CustomerDeleteController.CustomerDelete);

module.exports = router;