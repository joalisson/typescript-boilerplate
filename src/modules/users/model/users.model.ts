import * as mongoose from 'mongoose';
import UserSchema from '../schemas/users.schema';
import MUser from '../interfaces/users.interface';

UserSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

export default mongoose.model<MUser>('User', UserSchema);