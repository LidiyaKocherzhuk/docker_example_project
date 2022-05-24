import * as mongoose from 'mongoose';

import { teacherModel } from './teacherModel';
import { tokenModel } from './tokenModel';

const { Schema, model } = mongoose;

const StudentModel = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        age: {
            type: Number,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        teachers: {
            type: mongoose.Schema.Types.ObjectId,
            ref: teacherModel,
        },
        tokens: {
            type: mongoose.Schema.Types.ObjectId,
            ref: tokenModel,
        },
    },
    {
        timestamps: true,
    },
);

export const studentModel = model('student', StudentModel);
