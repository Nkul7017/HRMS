const User = require('../model/userModel'); // Import your User model

const userController = {
  createUser: async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: 'Error creating user', error: error.message });
    }
  },
  

  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving users' });
    }
  },

  // Add more controller methods as needed...
};

module.exports = userController;
