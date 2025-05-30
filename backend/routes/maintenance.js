// routes/maintenance.js
import express from 'express';
import Payment from '../models/Payment.js';

const router = express.Router();

// POST /api/pay — you already have this

// GET /api/maintenencelist — fetch all payments
router.get('/maintenencelist', async (req, res) => {
  try {
    const payments = await Payment.find().sort({ transactionDate: -1 }); // newest first
    res.json(payments);
  } catch (err) {
    console.error('Error fetching payments:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
