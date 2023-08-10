const Employee = require('../model/employeSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const hrController = {
  registerHR: async (req, res) => {
    const { username, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newHR = await HR.create({
        username,
        password: hashedPassword,
      });
      res.status(201).json({ message: 'HR registered successfully', hr: newHR });
    } catch (error) {
      res.status(400).json({ message: 'Error registering HR' });
    }
  },

  loginHR: async (req, res) => {
    const { username, password } = req.body;
    try {
      const hr = await HR.findOne({ username });
      if (!hr) {
        return res.status(404).json({ message: 'HR not found' });
      }
      const isPasswordValid = await bcrypt.compare(password, hr.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password' });
      }
      const token = jwt.sign({ hrId: hr._id }, 'your-secret-key', { expiresIn: '1h' });
      res.json({ message: 'Login successful', token });
    } catch (error) {
      res.status(500).json({ message: 'Error logging in' });
    }
  },

  getHRProfile: async (req, res) => {
    const hrId = req.hrId; // Assuming you store HR ID in req.hrId after authentication middleware
    try {
      const hr = await HR.findById(hrId);
      if (!hr) {
        return res.status(404).json({ message: 'HR not found' });
      }
      res.json(hr);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving HR profile' });
    }
  },

  // Other HR-related controller methods...
};

module.exports = hrController;
