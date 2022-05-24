import { ICommonField } from './commonFieldInterface';

export interface ITeacher extends ICommonField{
    name: string,
    age: number,
    email: string,
}
