// routes/maintenance.js
import express from 'express';
import UserDetail from '../models/UserDetails.js';

const router = express.Router();
router.get('/userdetailslist', async (req, res) => {
  try {

    const userdetails = await UserDetail.find().sort({ flatNumber: -1 }); // newest first
    res.json(userdetails);
  } catch (err) {
    console.error('Error fetching Flat Owner Details:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;