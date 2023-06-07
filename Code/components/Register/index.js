const express = require('express');
const router = express.Router();

const RegisterController = require('./RegisterController');

router.get('/', RegisterController.Register);

module.exports = router;
