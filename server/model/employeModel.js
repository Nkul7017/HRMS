const mongoose = require("mongoose");
const validator = require("validator");

const EmployeeSchema = new mongoose.Schema({
  employee_id: String,
  personal_info: {
    full_name: { type: String, required: true, },
    date_of_birth: { type: Date, required: true},
    gender: { type: String, required: true, },
    nationality: { type: String, required: true, },
    marital_status: { type: String, required: true, },
    pan: { type: String, required: true },
    contact_info: {
      address: { type: String, required: true, },
      phone: {type: Number,required: true,match: [/^(\+\d{1,3}[- ]?)?\d{3,}[- ]?\d{3,}[- ]?\d{4}$/,"Please Enter a valid Number",],},
      email: {type: String,required: true, unique: true,
        validate(value) {
          if (!validator.isEmail(value)) {
            throw new Error("email is invalid");
          }
        },
      },
    },
  },

  // employment_info: {
  //   date_of_joining: { type: Date, required: true },
  //   job_title: { type: String, required: true },
  //   department: { type: String, required: true },
  //   reporting_manager: { type: String, required: true },
  //   employment_status: { type: String, required: true },
  //   work_location: { type: String, required: true },
  //   employment_type: { type: String, required: true },
  // },

  // performance_development: {
  //   performance_reviews: [{date: Date,rating: Number,comments: String,},],
  //   training_history: [String],
  //   skills_competencies: [String],
  // },
  // time_attendance: {
  //   attendance_records: [{date: Date,clock_in: String,clock_out: String,},],
  //   overtime_hours: Number,
  // },
  // work_history: [
  //   {
  //     employer: { type: String, required: true },
  //     job_title: { type: String, required: true },
  //     start_date: Date,
  //     end_date: Date,
  //   },
  // ],
  // personal_development_plans: [
  //   {
  //     goal: { type: String, required: true },
  //     deadline: Date,
  //   },
  // ],
  // employee_surveys_feedback: [ 
  //   {
  //     survey_name: String,
  //     response: String,
  //   },
  // ],
});

module.exports = mongoose.model("Employee", EmployeeSchema);
