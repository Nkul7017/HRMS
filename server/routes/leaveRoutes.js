const express = require('express');
const router = express.Router();
const leaveController = require('../controllers/leaveController');

router.post('/leave/request', authenticateMiddleware, leaveController.createLeaveRequest);
router.get('/leave/requests', authenticateMiddleware, leaveController.getLeaveRequests);


module.exports = router;
