import { model, Schema, Document } from 'mongoose';
import { User } from '@/interfaces/user.interface';

const userSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userModel = model<User & Document>('User', userSchema);

export default userModel;
