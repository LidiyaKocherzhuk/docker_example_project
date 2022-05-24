import Joi from 'joi';

import { regexp } from '../constant/regexp';

export const studentValidator = {
    createStudent: Joi.object({
        name: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),

        age: Joi.number()
            .integer()
            .min(18)
            .max(100),

        email: Joi.string()
            .pattern(regexp.EMAIL)
            .required(),

        password: Joi.string()
            .pattern(regexp.PASSWORD)
            .required(),
    }),

    loginStudent: Joi.object({
        email: Joi.string()
            .pattern(regexp.EMAIL)
            .required(),

        password: Joi.string()
            .pattern(regexp.PASSWORD)
            .required(),
    }),
};
