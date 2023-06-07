const express = require('express');
const router = express.Router();

const VGAController = require('./VGAController');

router.get('/', VGAController.VGA);

module.exports = router;
