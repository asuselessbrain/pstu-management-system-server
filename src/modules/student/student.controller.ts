import { Request, Response } from 'express';
import { studentServices } from './student.services';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { students } = req.body;

    const result = await studentServices.createStudentInDB(students);

    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      result,
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: 'Error creating student',
      error: err,
    });
  }
};

export const studentController = {
  createStudent,
};
