const express = require('express');
const router = express.Router();

const TransactionInsertController = require('./TransactionInsertController');

router.get('/', TransactionInsertController.Insert);
router.post('/Transaction',TransactionInsertController.TransactionInsert);
module.exports = router;