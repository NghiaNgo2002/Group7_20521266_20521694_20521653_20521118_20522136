const express = require('express');
const router = express.Router();

const InsertController = require('./InsertController');

router.get('/', InsertController.Insert);

module.exports = router;
