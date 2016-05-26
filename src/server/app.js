import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import helmet from 'helmet';

process.env.TZ = 'Asia/Tokyo';

const app = express();
const env = process.env.VCAP_APP_ENV || process.env.NODE_ENV;

if (env === 'production') {
  app.use(express.static(path.join(__dirname, 'static')));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(helmet.noCache({ noEtag: true }));

app.use(() => {
  const err = new Error('Not found.');
  err.status = 404;
  throw err;
});

app.use((err, req, res) => {
  if (err.code === 'EBADCSRFTOKEN') {
    res.status(err.status).end(err.message);
  }
});

export default app;
