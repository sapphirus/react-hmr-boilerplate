import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import ect from 'ect';
import routes from './routes';

process.env.TZ = 'Asia/Tokyo';

const app = express();
const env = process.env.VCAP_APP_ENV || process.env.NODE_ENV;
const views = path.join(__dirname, 'views');

const ectRenderer = ect({
  watch: true,
  ext: '.ect',
});

if (env === 'production') {
  app.use(express.static(path.join(__dirname, 'static')));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(helmet.noCache({ noEtag: true }));
app.use(helmet.frameguard());

app.set('views', views);
app.set('view engine', 'ect');
app.engine('ect', ectRenderer.render);

app.disable('x-powered-by');

app.use(routes);

export default app;
