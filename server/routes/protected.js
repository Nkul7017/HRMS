const express = require('express');
const router = express.Router();
const { authenticateUser,isAdminMiddleware,isHrMiddleware } = require('../middleware/auth');


router.post('/login', authenticateUser, (req, res) => {
    const { user, token } = req;
    res.json({ user, token });
  });
  
  router.get('/protected', authenticateUser, (req, res) => {
    res.json({ message: 'This is a protected route.' });
  });
  
  router.get('/admin',authenticateUser, isAdminMiddleware, (req, res) => {
      res.json({ message: 'Admin-only route.' });
  });
  
  router.get('/hr', authenticateUser, isHrMiddleware, (req, res) => {
      res.json({ message: 'HR-only route.' });
  });

module.exports = router;
