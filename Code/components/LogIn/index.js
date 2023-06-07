const express = require('express');
const router = express.Router();

const LogInController = require('./LogInController');

router.get('/', LogInController.LogIn);

module.exports = router;
