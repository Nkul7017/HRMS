const express = require('express');
const router =new express.Router();
const employeeController = require('../controllers/employeController'); // Import your employeeController

router.post('/employes', employeeController.createEmployee);
router.get('/employes', employeeController.getAllEmployees);

module.exports = router;
 