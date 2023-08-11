const express = require('express');
const router = express.Router();
const leaveController = require('../controllers/leaveController');

// Route to create a new leave entry
router.post('/leaves', leaveController.createLeaveEntry);

// Route to get a list of all leave entries
router.get('/leaves', leaveController.getAllLeaveEntries);

module.exports = router;
