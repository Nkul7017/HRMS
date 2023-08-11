const express = require('express');
const router =new express.Router();
const userController = require('../controllers/userController'); // Import your userController

router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);

module.exports = router;
