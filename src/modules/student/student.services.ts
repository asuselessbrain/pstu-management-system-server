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

const getAllStudentInfoFromDB = () => {
  try {
    const result = StudentModel.find({});
    return result;
  } catch (err) {
    console.error(`Error while getting all student info from DB: ${err}`);
    throw new Error(`Error while getting all student info from DB: ${err}`);
  }
};

export const studentServices = {
  createStudentInDB,
  getAllStudentInfoFromDB,
};
