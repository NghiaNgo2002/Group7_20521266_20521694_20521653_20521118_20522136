const express = require('express');
const router = express.Router();

const EmployeeUpdateController = require('./EmployeeUpdateController');

router.get('/', EmployeeUpdateController.Update);
router.post('/Employee',EmployeeUpdateController.EmployeeUpdate);
module.exports = router;