const mongoose = require ('mongoose');

const paySchema = new mongoose.Schema({
    compensation_benefits: {
        salary: {
          basic: { type: Number },
          allowances: { type: Number },
          bonuses: { type: Number },
        },
        benefits: [String],
      },
});

module.exports = mongoose.model("pay", paySchema)