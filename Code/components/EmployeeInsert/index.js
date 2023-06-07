const express = require('express');
const router = express.Router();

const EmployeeInsertController = require('./EmployeeInsertController');

router.get('/', EmployeeInsertController.EmployeeInsert);

module.exports = router;