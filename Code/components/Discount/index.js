const express = require('express');
const router = express.Router();

const DiscountController = require('./DiscountController');

router.get('/', DiscountController.Discount);

module.exports = router;
