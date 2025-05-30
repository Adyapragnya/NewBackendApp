import mongoose from 'mongoose';

const userDetailsSchema = new mongoose.Schema({
  flatNumber: Number,
  ownerName: String,
  phoneNumber: Number,
  email: String,
  password: String,
  ownerDesignation: String,
  ownerBlock: String,
}, {
  timestamps: true
});

const UserDetail = mongoose.model('UserDetail', userDetailsSchema, 'UserDetails');

export default UserDetail;