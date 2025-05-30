import mongoose from 'mongoose';

const tenantDetailsSchema = new mongoose.Schema({
  flatNumber: Number,
  tenantName: String,
  phoneNumber: Number,
  email: String,
  password: String,
  tenantBlock: String,
}, {
  timestamps: true
});

const TenantDetail = mongoose.model('TenantDetail', tenantDetailsSchema, 'TenantDetails');

export default TenantDetail;