const express = require('express');
const router = express.Router();
const payController = require('../controllers/payController'); // Import your payController

// Route to create a new pay entry
router.post('/pays', payController.createPay);

// Route to get a list of all pay entries
router.get('/pays', payController.getAllPays);

module.exports = router;
