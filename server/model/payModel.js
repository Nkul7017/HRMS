const mongoose = require ('mongoose');

const paySchema = new mongoose.Schema(
  {
    basic: { type: Number,required: true},
    allowances: { type: Number,required: true },
    bonuses: { type: Number,required: true }, 
  }
);

module.exports = mongoose.model("pay", paySchema)