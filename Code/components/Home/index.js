const express = require('express');
const router = express.Router();

const HomeController = require('./HomeController');

router.get('/', HomeController.Home);

module.exports = router;
