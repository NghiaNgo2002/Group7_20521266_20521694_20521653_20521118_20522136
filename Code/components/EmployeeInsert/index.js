const express = require('express');
const router = express.Router();

const EmployeeInsertController = require('./EmployeeInsertController');

router.get('/', EmployeeInsertController.Insert);
router.post('/Employee',EmployeeInsertController.EmployeeInsert);
module.exports = router;