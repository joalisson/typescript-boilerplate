import * as mongoose from 'mongoose';

export default new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    phone: { type: String },
    address: { type: String },
    created_at: { type: Date, default: Date.now },
  }
);
