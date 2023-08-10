const Employee = require('../model/employeSchema');

const leaveController = {
  createLeaveRequest: async (req, res) => {
    const leaveData = req.body; // Leave request data from the request body
    try {
      const newLeaveRequest = await LeaveRequest.create(leaveData);
      res.status(201).json(newLeaveRequest);
    } catch (error) {
      res.status(400).json({ message: 'Error creating leave request' });
    }
  },

  getLeaveRequests: async (req, res) => {
    try {
      const leaveRequests = await LeaveRequest.find();
      res.json(leaveRequests);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving leave requests' });
    }
  },

  // Other leave-related controller methods...
};

module.exports = leaveController;
