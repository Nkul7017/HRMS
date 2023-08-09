const data = {
    employees: [
      {
        employee_id: "E123456",
        personal_info: {
          full_name: "John Doe",
          date_of_birth: "1990-05-15",
          gender: "Male",
          nationality: "USA",
          marital_status: "Single",
          contact_info: {
            address: "123 Main St, City, State, Zip",
            phone: "555-123-4567",
            email: "john.doe@example.com",
          },
        },
        employment_info: {
          date_of_joining: "2020-02-10",
          job_title: "Software Engineer",
          department: "Engineering",
          reporting_manager: "Jane Smith",
          employment_status: "Full-Time",
          work_location: "Office Building A, Floor 3",
          employment_type: "Permanent",
        },
        compensation_benefits: {
          salary: {
            basic: 75000,
            allowances: 10000,
            bonuses: 5000,
          },
          pay_frequency: "Monthly",
          tax_info: {
            tax_id_number: "123-45-6789",
            withholding_preferences: "Married, 0 allowances",
          },
          benefits: ["Healthcare", "Retirement Plan"],
          leave_balances: {
            vacation: 10,
            sick_days: 5,
          },
        },
        performance_development: {
          performance_reviews: [
            {
              date: "2023-01-15",
              rating: 4.5,
              comments: "Excellent performance",
            },
          ],
          training_history: ["JavaScript Fundamentals", "Effective Communication"],
          skills_competencies: ["JavaScript", "Problem Solving"],
        },
        time_attendance: {
          attendance_records: [
            {
              date: "2023-08-01",
              clock_in: "09:00 AM",
              clock_out: "06:00 PM",
            },
          ],
          overtime_hours: 2,
        },

        leave: {
            leave_entitlements: {
              annual_leave: {
                balance: 10,
                accrual_rate: 1.25,
              },
              sick_leave: {
                balance: 5,
                accrual_rate: 0.75,
              },
            },
            leave_requests: [
              {
                date: "2023-08-05",
                type: "Vacation",
                status: "Approved",
              },
            ],
          },
        documents_certifications: {
          educational_certificates: ["Bachelor's in Computer Science"],
          professional_licenses: [],
          training_certifications: ["JavaScript Certification"],
          identification_documents: ["Driver's License"],
        },
        emergency_contacts: [
          {
            name: "Jane Doe",
            relationship: "Sibling",
            phone: "555-987-6543",
          },
        ],
        work_history: [
          {
            employer: "Tech Solutions Inc.",
            job_title: "Junior Software Engineer",
            start_date: "2018-06-01",
            end_date: "2020-02-05",
          },
        ],
        personal_development_plans: [
          {
            goal: "Improve teamwork skills",
            deadline: "2023-12-31",
          },
        ],
        employee_surveys_feedback: [
          {
            survey_name: "Annual Employee Satisfaction Survey",
            response: "Satisfied with the work environment.",
          },
        ],
      },
    ],
  };
  