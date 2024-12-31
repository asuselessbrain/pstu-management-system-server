import express, { Request, Response } from 'express';
import { studentRouter } from './modules/student/student.router';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/students', studentRouter);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Server connected successfully',
  });
});

export default app;
