const express = require('express');
const router = express.Router();

const EmployeeController = require('./EmployeeController');

router.get('/', EmployeeController.Employee);

module.exports = router;
