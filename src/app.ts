import express, { Request, Response } from 'express';
import { studentRouter } from './modules/student/student.router';
import cors from 'cors';
import { userRouter } from './modules/user/user.router';
import { globalErrorHandler } from './middlewears/globalErrorHandlear';
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/students', studentRouter);
app.use('/api/users', userRouter);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Server connected successfully',
  });
});

app.use(globalErrorHandler);

export default app;
