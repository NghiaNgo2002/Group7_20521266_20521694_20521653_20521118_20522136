const express = require('express');
const router = express.Router();

const CustomerInsertController = require('./CustomerInsertController');

router.get('/', CustomerInsertController.CustomerInsert);

module.exports = router;