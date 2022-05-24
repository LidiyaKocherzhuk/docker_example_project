import {NextFunction, Request, Response} from 'express';

import {tokenService, studentService} from '../services';
import {IRequestExtendStudent, IStudent} from '../interfaces';

class StudentController {
    async registrationStudent(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            console.log(req.body);
            const student = await studentService.createStudent(req.body);
            res.json(student)
        } catch (err) {
            next(err);
        }
    }

    async loginStudent(req: IRequestExtendStudent, res: Response, next: NextFunction) {
        try {
            const {_id, email, password} = req.student as IStudent;
            console.log(req.student);

            const accessToken = await tokenService.generateAccessToken(_id);
            const refreshToken = await tokenService.generateRefreshToken(_id);

            res.json({
                user: {
                    _id,
                    email,
                    password,
                },
                tokens: {
                    accessToken,
                    refreshToken,
                },
            });
        } catch (err) {
            next(err);
        }
    }
}

export const studentController = new StudentController();
