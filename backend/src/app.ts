import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import {apiRouter} from './routers';
import {config} from './config';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb://db:27017/mongoose')

app.use(apiRouter);

// @ts-ignore
app.use('*', (err, req, res, next) => {
    res.status(err.status || 500)
        .json({
            message: err.message,
            data: err.data,
        });
    console.log(err.message);
});
const {PORT} = config;
app.listen(PORT, () => {
    console.log(`Server has started in ${PORT} port!!!`);
});
