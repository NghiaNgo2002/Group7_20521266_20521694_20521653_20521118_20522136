const express = require('express');
const router = express.Router();

const EmployeeUpdateController = require('./EmployeeUpdateController');

router.get('/', EmployeeUpdateController.EmployeeUpdate);

module.exports = router;