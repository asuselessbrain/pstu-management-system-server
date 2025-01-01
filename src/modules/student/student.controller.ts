import { Request, Response } from 'express';
import { studentServices } from './student.services';

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentInfoFromDB();
    res.status(200).json({
      success: true,
      message: 'All students retrieved successfully',
      result,
    });
  } catch (err) {
    res.json({
      success: false,
      message: 'Error retrieving students',
      error: err,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const result = await studentServices.getSingleStudentInfoFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Student retrieved successfully',
      result,
    });
  } catch (err) {
    res.json({
      success: false,
      message: 'Error retrieving student',
      error: err,
    });
  }
};

const updateStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { students } = req.body;

    const result = await studentServices.updateStudentInDB(id, students);
    res.status(200).json({
      success: true,
      message: 'Student updated successfully',
      result,
    });
  } catch (err) {
    res.json({
      success: false,
      message: 'Error updating student',
      error: err,
    });
  }
};

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const result = await studentServices.deleteStudentFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Student deleted successfully',
      result,
    });
  } catch (err) {
    res.json({
      success: false,
      message: 'Error deleting student',
      error: err,
    });
  }
};

export const studentController = {
  getAllStudent,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
