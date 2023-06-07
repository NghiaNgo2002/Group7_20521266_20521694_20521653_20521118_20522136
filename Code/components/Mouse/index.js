const express = require('express');
const router = express.Router();

const MouseController = require('./MouseController');

router.get('/', MouseController.Mouse);

module.exports = router;
