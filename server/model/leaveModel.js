const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({
    leave: {
        leave_entitlements: {
          annual_leave: {
            balance: Number,
            accrual_rate: Number,
          },
          sick_leave: {
            balance: Number,
            accrual_rate: Number,
          },
        },
        leave_requests: [
          {
            date: Date,
            type: String,
            status: String,
          },
        ],
        leave_balances: {
          vacation: Number,
          sick_days: Number,
        },
      },
});

module.exports = mongoose.model("leave", leaveSchema);