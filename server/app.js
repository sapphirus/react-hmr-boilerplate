import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import helmet from 'helmet';
// import { Routes } from './routes';

// const TARGET = process.env.npm_lifecycle_event;
// const ENV = process.env || 'development';

process.env.TZ = 'Asia/Tokyo';

const app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(helmet.noCache({ noEtag: true }));

// Routes(app);

app.use((req, res, next) => {
  const err = new Error();
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  if (err.code === 'EBADCSRFTOKEN') {
    res.status(err.status).end(err.message);
  }
});

export default app;
