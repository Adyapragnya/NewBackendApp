import mongoose from 'mongoose';

const loginDetailsSchema = new mongoose.Schema({
  adminId: String,
  adminName: String,
  adminPhoneNumber: Number,
  adminEmail: String,
  adminPassword: String,
  adminRole: String,
}, {
  timestamps: true
});

const LoginDetail = mongoose.model('LoginDetail', loginDetailsSchema, 'LoginDetails');

export default LoginDetail;