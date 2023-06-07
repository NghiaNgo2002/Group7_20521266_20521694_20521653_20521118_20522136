const express = require('express');
const router = express.Router();

const CustomerUpdateController = require('./CustomerUpdateController');

router.get('/', CustomerUpdateController.CustomerUpdate);

module.exports = router;