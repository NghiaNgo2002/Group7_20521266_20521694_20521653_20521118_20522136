const express = require('express');
const router = express.Router();

const CustomerDeleteController = require('./CustomerDeleteController');

router.get('/', CustomerDeleteController.Delete);
router.post('/Customer',CustomerDeleteController.CustomerDelete);
module.exports = router;