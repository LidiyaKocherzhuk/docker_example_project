import { Router } from 'express';
import { studentRouter } from './studentRouter';
import { teacherRouter } from './teatherRouter';

export const apiRouter = Router();

apiRouter.use('/students', studentRouter);
apiRouter.use('/teachers', teacherRouter);
