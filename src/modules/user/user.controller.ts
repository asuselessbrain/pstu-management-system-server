import { Request, Response } from 'express';
import { userServices } from './user.services';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, students } = req.body;
    const result = await userServices.createStudentInDB(password, students);
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      result,
    });
  } catch (err) {
    res.json({
      success: false,
      message: 'Error while creating student',
      error: err,
    });
  }
};

export const userController = {
  createStudent,
};
