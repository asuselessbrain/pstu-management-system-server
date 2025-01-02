import { model, Schema } from 'mongoose';
import { TUser } from './use.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

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

userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt));
  next();
});

export const UserModel = model<TUser>('user', userSchema);
