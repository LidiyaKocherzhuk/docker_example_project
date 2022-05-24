import bcrypt from 'bcryptjs';

import { studentModel } from '../models';
import { IStudent } from '../interfaces';

class StudentService {
    async createStudent(data: IStudent): Promise<IStudent> {
        const hashPassword = await this._hashPassword(data.password);
        const student = await studentModel.create({...data, password: hashPassword});
        return student;
    }

    getStudentByParam(email: string): any {
        return studentModel.findOne({ email });
    }

    comparePassword(password: string, hasPassword: string): Promise<boolean> | void {
        return bcrypt.compare(password, hasPassword);
    }

    _hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }
}

export const studentService = new StudentService();
