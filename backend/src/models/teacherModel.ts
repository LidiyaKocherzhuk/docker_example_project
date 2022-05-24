import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const TeacherModel = new Schema(
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
            required: true,
            trim: true,
            unique: true,
        },
    },
    {
        timestamps: true,
    },
);

export const teacherModel = model('teacher', TeacherModel);
