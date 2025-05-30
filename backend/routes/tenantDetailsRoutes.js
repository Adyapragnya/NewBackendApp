// routes/maintenance.js
import express from 'express';
import TenantDetail from '../models/TenantDetails.js';

const router = express.Router();
router.get('/tenantdetailslist', async (req, res) => {
  try {

    const tenantdetails = await TenantDetail.find().sort({ flatNumber: -1 }); // newest first
    res.json(tenantdetails);
  } catch (err) {
    console.error('Error fetching Tenant Details:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;