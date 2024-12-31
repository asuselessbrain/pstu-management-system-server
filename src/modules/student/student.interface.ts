export type Name = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type Guardian = {
  name: string;
  occupation: string;
  contactNo: string;
  email: string;
};

export type LocalGuardian = {
  name: string;
  contactNo: string;
  email: string;
  relationship: string;
  address: string;
};

export type TStudent = {
  id: string;
  name: Name;
  gender: 'male' | 'female' | 'others';
  dateOfBirth: Date;
  email: string;
  contactNo: string;
  emergencyContact: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImage?: string;
  isActive: 'active' | 'blocked';
};
