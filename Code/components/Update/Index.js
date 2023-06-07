const express = require('express');
const router = express.Router();

const UpdateController = require('./UpdateController');

router.get('/', UpdateController.Update);

module.exports = router;
