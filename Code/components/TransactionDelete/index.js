const express = require('express');
const router = express.Router();

const TransactionDeleteController = require('./TransactionDeleteController');

router.get('/', TransactionDeleteController.Delete);
router.post('/Transaction',TransactionDeleteController.TransactionDelete);
module.exports = router;