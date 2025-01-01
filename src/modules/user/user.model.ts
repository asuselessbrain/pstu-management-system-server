import { model, Schema } from 'mongoose';
import { TUser } from './use.interface';

const userSchema = new Schema<TUser>(
  {
    id: { type: String, required: true, unique: true },
    role: {
      type: String,
      enum: ['student', 'faculty', 'admin'],
      required: true,
    },
    password: { type: String, required: true },
    isPasswordChanged: { type: Boolean, required: true, default: true },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      required: true,
      default: 'in-progress',
    },
    isDelete: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  },
);

export const UserModel = model<TUser>('user', userSchema);
