import {NextFunction, Request, Response} from 'express';

import {studentValidator} from '../validators';
import {ErrorHandler} from '../errors';
import {studentService} from '../services';
import {IRequestExtendStudent} from '../interfaces';

class StudentMiddleware {
    studentValid(req: Request, res: Response, next: NextFunction): void {
        try {
            const {error, value} = studentValidator.createStudent.validate(req.body);

            if (error) {
                next(new ErrorHandler(error.message));
                return;
            }
                console.log("validator", req.body);

            req.body = value;
            next();
        } catch (err) {
            next(err);
        }
    }

    studentValidLoginData(req: Request, res: Response, next: NextFunction): void {
        try {
            const {error, value} = studentValidator.loginStudent.validate(req.body);

            if (error) {
                next(new ErrorHandler(error.message));
                return;
            }

            req.body = value;
            next();
        } catch (err) {
            next(err);
        }
    }

    async checkIfStudentExist(req: IRequestExtendStudent, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;

            const student = await studentService.getStudentByParam(email);

            if (!student) {
                next(new ErrorHandler('Student does not exist!!!'));
                return;
            }

            const comparedPass = await studentService.comparePassword(
                password,
                student.password,
            );

            if (!comparedPass) {
                next(new ErrorHandler('Student does not exist!!!'));
                return;
            }

            req.student = student;
            next();
        } catch (err) {
            next(err);
        }
    }
}

export const studentMiddleware = new StudentMiddleware();
