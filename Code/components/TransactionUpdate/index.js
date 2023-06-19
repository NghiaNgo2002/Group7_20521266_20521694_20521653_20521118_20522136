const express = require('express');
const router = express.Router();

const TransactionUpdateController = require('./TransactionUpdateController');

router.get('/', TransactionUpdateController.Update);
router.post('/Transaction',TransactionUpdateController.TransactionUpdate);
module.exports = router;