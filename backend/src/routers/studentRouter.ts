import { Router } from 'express';

import { studentController } from '../controllers';
import { studentMiddleware } from '../middlewares';

export const studentRouter = Router();

studentRouter.post('/registration', studentMiddleware.studentValid, studentController.registrationStudent);
studentRouter.post(
    '/login',
    studentMiddleware.studentValidLoginData,
    studentMiddleware.checkIfStudentExist,
    studentController.loginStudent,
);
