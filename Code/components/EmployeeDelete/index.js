const express = require('express');
const router = express.Router();

const EmployeeDeleteController = require('./EmployeeDeleteController');

router.get('/', EmployeeDeleteController.EmployeeDelete);

module.exports = router;