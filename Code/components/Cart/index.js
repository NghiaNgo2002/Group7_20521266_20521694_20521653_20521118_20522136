const express = require('express');
const router = express.Router();

const CartController = require('./CartController');

router.get('/', CartController.Cart);

module.exports = router;