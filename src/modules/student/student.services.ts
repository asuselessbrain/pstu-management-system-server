import { TStudent } from './student.interface';
import { StudentModel } from './student.model';

const createStudentInDB = async (student: TStudent) => {
  try {
    const result = await StudentModel.create(student);
    return result;
  } catch (err) {
    console.error(`Error while creating student in DB: ${err}`);
    throw new Error(`Error while creating student in DB: ${err}`);
  }
};

export const studentServices = {
  createStudentInDB,
};
