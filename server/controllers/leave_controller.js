const Employee = require('../model/employeeschema');
const employeeFunctions = {
  getEmployeeByEmail: async (email) => {
    try {
      const employee = await Employee.findOne({ 'personal_info.contact_info.email': email });
      return employee;
    } catch (error) {
      throw new Error('Error fetching employee: ' + error.message);
    }
  },

  applyForLeave: async (employeeId, leaveDetails) => {
    try {
      const updatedEmployee = await Employee.findByIdAndUpdate(
        employeeId,
        { $push: { 'leave.leave_requests': leaveDetails } },
        { new: true }
      );
      return updatedEmployee;
    } catch (error) {
      throw new Error('Error applying for leave: ' + error.message);
    }
  },
  
  getLeaveBalance: async (employeeId) => {
    try {
      const employee = await Employee.findById(employeeId);
      const leaveBalance = employee.leave.leave_entitlements;
      return leaveBalance;
    } catch (error) {
      throw new Error('Error fetching leave balance: ' + error.message);
    }
  },
};

module.exports = employeeFunctions;
