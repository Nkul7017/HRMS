const mongoose = require("mongoose");
const validator=require('validator');
const EmployeeSchema = new mongoose.Schema({
  employee_id: String,
  personal_info: {
    full_name: { type: String, required: true,lowercase: true,},
    date_of_birth: { type: Date,required: true,lowercase: true, },
    gender: { type: String, required: true, lowercase: true,},
    nationality: { type: String, required: true, lowercase: true },
    marital_status: { type: String, required: true, lowercase: true },
    contact_info: {
      address: { type: String, required: true, lowercase: true },
      phone: { type: Number, required: true,match:[/^(\+\d{1,3}[- ]?)?\d{3,}[- ]?\d{3,}[- ]?\d{4}$/,'Please Enter a valid Number']},
      email:{ type:String, required:true,unique:true,
      validate(value)
      {
        if(!validator.isEmail(value))
        {
          throw new Error("email is invalid");
        }
      }
      },
    },
  },
  employment_info: {
    date_of_joining: Date,
    job_title: String,
    department: String,
    reporting_manager: String,
    employment_status: String,
    work_location: String,
    employment_type: String,
  },
  compensation_benefits: {
    salary: {
      basic: Number,
      allowances: Number,
      bonuses: Number,
    },
    pay_frequency: String,
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
  documents_certifications: {
    educational_certificates: [String],
    professional_licenses: [String],
    training_certifications: [String],
    identification_documents: [String],
  },
  emergency_contacts: [
    {
      name: String,
      relationship: String,
      phone: String,
    },
  ],
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
