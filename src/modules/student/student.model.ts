import { model, Schema } from 'mongoose';
import { Guardian, LocalGuardian, Name, TStudent } from './student.interface';

const nameSchema = new Schema<Name>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const guardianSchema = new Schema<Guardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  email: { type: String, required: true },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  contactNo: { type: String, required: true },
  email: { type: String, required: true },
  relationship: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<TStudent>(
  {
    id: { type: String, required: true },
    name: { type: nameSchema, required: true },
    gender: {
      type: String,
      enum: ['male', 'female', 'others'],
      required: true,
    },
    dateOfBirth: { type: Date, required: true },
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    emergencyContact: { type: String, required: true },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      required: true,
    },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: { type: guardianSchema, required: true },
    localGuardian: { type: localGuardianSchema, required: true },
    profileImage: { type: String },
    isActive: { type: String, enum: ['active', 'blocked'], required: true },
  },
  {
    timestamps: true,
  },
);

export const StudentModel = model<TStudent>('student', studentSchema);
