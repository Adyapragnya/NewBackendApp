const Payment = require('../../models/Pay-Maintenance/Payment');

exports.submitPayment = async (req, res) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.status(201).json({ message: 'Payment saved', payment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
