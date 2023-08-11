const Employee = require('../model/employeModel'); // Import your Employee model

const employeeController = {
  createEmployee: async (req, res) => {
    try {
      const newEmployee = await Employee.create(req.body);
      res.status(201).json(newEmployee);
    } catch (error) {
      res.status(400).json({ message: 'Error creating employee', error: error.message});
    }
  },

  getAllEmployees: async (req, res) => {
    try {
      const employees = await Employee.find();
      res.json(employees);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving employees',error: error.message });
    }
  },

  // Add more controller methods as needed...
};

module.exports = employeeController;
