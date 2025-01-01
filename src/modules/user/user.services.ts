import config from '../../config';
import { TStudent } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import { TUser } from './use.interface';
import { UserModel } from './user.model';

const createStudentInDB = async (password: string, studentData: TStudent) => {
  try {
    const userData: Partial<TUser> = {};

    userData.password = password || (config.default_password as string);

    userData.role = 'student';

    userData.id = '2002040';

    const result = await UserModel.create(userData);

    if (Object.keys(result).length) {
      studentData.id = result.id;
      studentData.user = result._id;
    }
    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  } catch (err) {
    console.error(`Error while creating student in DB: ${err}`);
    throw new Error(`Error while creating student in DB: ${err}`);
  }
};

export const userServices = {
  createStudentInDB,
};
