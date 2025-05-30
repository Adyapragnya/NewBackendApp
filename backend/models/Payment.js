import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  ownerName: String,
  flatNumber: String,
  tenantName: String,
  financialYear: String,
  month: String,
  paymentMode: String,
  transactionId: String,
  transactionDate: Date,
}, {
  timestamps: true
});

const Payment = mongoose.model('Payments', paymentSchema, 'Payments');

export default Payment;