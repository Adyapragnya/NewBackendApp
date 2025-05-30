import express from 'express';
import Payment from '../models/Payment.js';

const router = express.Router();

router.post('/pay', async (req, res) => {
  try {
    const {
      ownerName,
      flatNumber,
      tenantName,
      financialYear,
      month,
      paymentMode,
      transactionId,
      transactionDate,
    } = req.body;
   

    if (!ownerName || !flatNumber || !financialYear || !month || !paymentMode) {
      return res.status(400).json({ error: 'Please fill all required fields.' });
    }


    const payment = new Payment({
      ownerName,
      flatNumber,
      tenantName,
      financialYear,
      month,
      paymentMode,
      transactionId,
      transactionDate,
    });

    const savedPayment = await payment.save();
    res.status(201).json(savedPayment);
  } catch (error) {
    console.error('Payment Error:', error.message);
    res.status(500).json({ error: 'Server error: ' + error.message });
  }
});

router.get('/maintenencelist', async (req, res) => {
  try {
    const payments = await Payment.find().sort({ transactionDate: -1 });
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;