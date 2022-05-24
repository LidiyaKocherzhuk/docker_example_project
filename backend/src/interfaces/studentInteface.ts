import { Request } from 'express';

import { ICommonField } from './commonFieldInterface';

export interface IStudent extends ICommonField{
    name: string,
    age: number,
    email: string,
    password: string,
}

export interface IRequestExtendStudent extends Request{
    student?: IStudent;
}
