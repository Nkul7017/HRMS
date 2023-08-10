const Employee = require('../model/employeeschema');

const hrManagerFunctions = {
  addEmployee: async (employeeData) => {
    try {
      const newEmployee = await Employee.create(employeeData);
      return newEmployee;
    } catch (error) {
      throw new Error('Error adding employee: ' + error.message);
    }
  },

  updateEmployee: async (employeeId, updatedData) => {
    try {
      const updatedEmployee = await Employee.findByIdAndUpdate(employeeId, updatedData, { new: true });
      return updatedEmployee;
    } catch (error) {
      throw new Error('Error updating employee: ' + error.message);
    }
  },
  getAllEmployees: async () => {
    try {
      const employees = await Employee.find();
      return employees;
    } catch (error) {
      throw new Error('Error fetching employees: ' + error.message);
    }
  },
  deleteEmployee: async (employeeId) => {
    try {
      await Employee.findByIdAndDelete(employeeId);
      return 'Employee deleted successfully';
    } catch (error) {
      throw new Error('Error deleting employee: ' + error.message);
    }
  },
};

module.exports = hrManagerFunctions;
