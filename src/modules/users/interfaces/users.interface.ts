import * as mongoose from 'mongoose';

export interface IUser {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  address?: string;
  created_at?: Date;
}

export default interface MUser extends mongoose.Document, Partial<IUser> {}