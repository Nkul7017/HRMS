const express = require('express');
const router = express.Router();
const hrController = require('../controllers/hrController');

router.post('/hr/register', hrController.registerHR);
router.post('/hr/login', hrController.loginHR);
router.get('/hr/profile', authenticateMiddleware, hrController.getHRProfile);

module.exports = router;
