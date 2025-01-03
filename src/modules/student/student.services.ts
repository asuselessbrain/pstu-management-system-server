import { TStudent } from './student.interface';
import { StudentModel } from './student.model';

const getAllStudentInfoFromDB = async () => {
  try {
    const result = await StudentModel.find({});
    return result;
  } catch (err) {
    console.error(`Error while getting all student info from DB: ${err}`);
    throw new Error(`Error while getting all student info from DB: ${err}`);
  }
};

const getSingleStudentInfoFromDB = async (id: string) => {
  try {
    const result = await StudentModel.findOne({ id });
    return result;
  } catch (err) {
    console.error(
      `Error while getting student info from DB with id: ${id}: ${err}`,
    );
    throw new Error(
      `Error while getting student info from DB with id: ${id}: ${err}`,
    );
  }
};

const updateStudentInDB = async (id: string, student: TStudent) => {
  try {
    const result = await StudentModel.findByIdAndUpdate(id, student, {
      new: true,
    });
    return result;
  } catch (err) {
    console.error(`Error while updating student in DB with id: ${id}: ${err}`);
    throw new Error(
      `Error while updating student in DB with id: ${id}: ${err}`,
    );
  }
};

const deleteStudentFromDB = async (id: string) => {
  try {
    const result = await StudentModel.deleteOne({ id });
    return result;
  } catch (err) {
    console.error(
      `Error while deleting student from DB with id: ${id}: ${err}`,
    );
    throw new Error(
      `Error while deleting student from DB with id: ${id}: ${err}`,
    );
  }
};

export const studentServices = {
  getAllStudentInfoFromDB,
  getSingleStudentInfoFromDB,
  deleteStudentFromDB,
  updateStudentInDB,
};
