import { NextFunction, Request, Response } from 'express';
import { userServices } from './user.services';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, students } = req.body;
    const result = await userServices.createStudentInDB(password, students);
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      result,
    });
  } catch (err) {
    next(err);
  }
};

export const userController = {
  createStudent,
};
