import express from 'express';
import { studentController } from './student.controller';

const router = express.Router();

router.post('/create-student', studentController.createStudent);
router.get('/', studentController.getAllStudent);
router.get('/:id', studentController.getSingleStudent);
router.put('/update-student/:id', studentController.updateStudent);

export const studentRouter = router;
