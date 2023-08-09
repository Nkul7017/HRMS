const mongoose = require("mongoose");
const validator = require("validator");

const EmployeeSchema = new mongoose.Schema({
  employee_id: String,
  personal_info: {
    full_name: { type: String, required: true, lowercase: true },
    date_of_birth: { type: Date, required: true, lowercase: true },
    gender: { type: String, required: true, lowercase: true },
    nationality: { type: String, required: true, lowercase: true },
    marital_status: { type: String, required: true, lowercase: true },
    contact_info: {
      address: { type: String, required: true, lowercase: true },
      phone: {
        type: Number,
        required: true,
        match: [
          /^(\+\d{1,3}[- ]?)?\d{3,}[- ]?\d{3,}[- ]?\d{4}$/,
          "Please Enter a valid Number",
        ],
      },
      email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
          if (!validator.isEmail(value)) {
            throw new Error("email is invalid");
          }
        },
      },
    },
  },
  employment_info: {
    date_of_joining: { type: Date },
    job_title: { type: String },
    department: { type: String },
    reporting_manager: { type: String },
    employment_status: { type: String },
    work_location: { type: String },
    employment_type: { type: String },
  },

  compensation_benefits: {
    salary: {
      basic: { type: Number },
      allowances: { type: Number },
      bonuses: { type: Number },
    },
    pay_frequency: { type: String },
    tax_info: {
      tax_id_number: String,
      withholding_preferences: String,
    },
    benefits: [String],
    leave_balances: {
      vacation: Number,
      sick_days: Number,
    },
  },
  performance_development: {
    performance_reviews: [
      {
        date: Date,
        rating: Number,
        comments: String,
      },
    ],
    training_history: [String],
    skills_competencies: [String],
  },
  time_attendance: {
    attendance_records: [
      {
        date: Date,
        clock_in: String,
        clock_out: String,
      },
    ],
    overtime_hours: Number,
  },
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
  },
  work_history: [
    {
      employer: String,
      job_title: String,
      start_date: Date,
      end_date: Date,
    },
  ],
  personal_development_plans: [
    {
      goal: String,
      deadline: Date,
    },
  ],
  employee_surveys_feedback: [
    {
      survey_name: String,
      response: String,
    },
  ],
});

module.exports = mongoose.model("Employee", EmployeeSchema);
