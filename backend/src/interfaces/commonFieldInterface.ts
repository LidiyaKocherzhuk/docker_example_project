import { ObjectID } from 'typeorm';

export interface ICommonField {
    _id: ObjectID,
    createdAt: string,
    updatedAt?: string,
}
