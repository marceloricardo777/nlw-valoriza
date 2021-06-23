import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import './database';
import { errors } from './middlewares/errors';
import { router } from './routes';

const app = express();

app.use(express.json());

app.use(router);
app.use(errors);
app.listen(3000, () => {
    console.log('Server is running')
});