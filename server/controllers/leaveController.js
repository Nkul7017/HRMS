const Leave = require('../model/leaveModel'); // Import your Leave model

const leaveController = { 
  createLeaveEntry: async (req, res) => {
    try {
      const newLeaveEntry = await Leave.create(req.body);
      res.status(201).json(newLeaveEntry);
    } catch (error) {
      res.status(400).json({ message: 'Error creating leave entry',error: error.message });
    }
  },

  getAllLeaveEntries: async (req, res) => {
    try {
      const leaveEntries = await Leave.find();
      res.json(leaveEntries);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving leave entries',error: error.message  });
    }
  },

  // Add more controller methods as needed...
};

module.exports = leaveController;
