const express = require('express');
const router = express.Router();

const ProductsController = require('./ProductsController');

router.get('/', ProductsController.Products);

module.exports = router;
