const express = require('express');
const router = express.Router();

const DeleteController = require('./DeleteController');

router.get('/', DeleteController.Delete);

module.exports = router;
