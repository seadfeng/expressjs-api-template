import dotenv from 'dotenv';
import express, { Application } from 'express';
import logger from 'morgan';
import indexRouter from './routes/index';
import usersRouter from './routes/users';

dotenv.config();
const app: Application = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;
