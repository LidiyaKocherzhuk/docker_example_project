import { Request, Response, NextFunction } from 'express';

import { teacherModel } from '../models';

class TeacherController {
    createTeacher(req: Request, res: Response, next: NextFunction) {
        try {
            const teacher = teacherModel.create(req.body);
            console.log(teacher);
        } catch (err) {
            console.log(err);
        }
    }
}

export const teacherController = new TeacherController();
