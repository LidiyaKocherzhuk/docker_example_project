import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const TokenModel = new Schema(
    {
        accessToken: {
            type: String,
            trim: true,
            unique: true,
        },
        refreshToken: {
            type: String,
            trim: true,
            unique: true,
        },
    },
    {
        timestamps: true,
    },
);

export const tokenModel = model('tokens', TokenModel);
