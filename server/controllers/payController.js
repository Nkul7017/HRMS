const Pay = require('../model/payModel'); // Import your Pay model

const payController = {
  createPay: async (req, res) => {
    try {
      const newPay = await Pay.create(req.body);
      res.status(201).json(newPay);
    } catch (error) {
      res.status(400).json({ message: 'Error creating pay entry' });
    }
  },

  getAllPays: async (req, res) => {
    try {
      const pays = await Pay.find();
      res.json(pays);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving pay entries' });
    }
  },

  // Add more controller methods as needed...
};

module.exports = payController;
