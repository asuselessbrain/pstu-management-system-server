export type TUser = {
  id: string;
  role: 'student' | 'faculty' | 'admin';
  password: string;
  isPasswordChanged: boolean;
  status: 'in-progress' | 'blocked';
  isDelete: boolean;
};
