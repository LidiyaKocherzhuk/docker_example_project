import { ObjectID } from 'typeorm';

import { ICommonField } from './commonFieldInterface';

export interface IToken extends ICommonField{
    userId: string,
    accessToken: string,
    refreshToken: string,
}
export interface IUserPayload{
    _id: ObjectID,
    name: string,
    email: string,
}
export interface ITokenPair{
    userId: ObjectID,
    accessToken: string,
    refreshToken: string,
}
