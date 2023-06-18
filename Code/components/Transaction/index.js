const express = require('express');
const router = express.Router();

const TransactionController = require('./TransactionController');

router.get('/', TransactionController.Transaction);

module.exports = router;