import { Router } from 'express';

import { teacherController } from '../controllers';

export const teacherRouter = Router();

teacherRouter.post('/registration', teacherController.createTeacher);
teacherRouter.post('/login');
