import jwt from 'jsonwebtoken';
import { ObjectID } from 'typeorm';

import { config } from '../config';
import { ITokenPair } from '../interfaces';
import { tokenModel } from '../models';

class TokenService {
    generateAccessToken(payload: ObjectID):string {
        return jwt.sign(
            { payload },
            config.SECRET_ACCESS_KEY as string,
            { expiresIn: '2m' },
        );
    }

    generateRefreshToken(payload: ObjectID): string {
        return jwt.sign(
            { payload },
            config.SECRET_REFRESH_KEY as string,
            { expiresIn: '1d' },
        );
    }

    saveTokenPair(tokens: ITokenPair): void {
        tokenModel.create(tokens);
    }
}

export const tokenService = new TokenService();
