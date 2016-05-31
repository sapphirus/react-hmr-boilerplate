import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';
import helmet from 'helmet';
import ect from 'ect';
import routes from './routes';

process.env.TZ = 'Asia/Tokyo';

const app = express();
const env = process.env.VCAP_APP_ENV || process.env.NODE_ENV;
const views = path.join(__dirname, 'views');
const sessionOptions = {
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true },
};

const ectRenderer = ect({
  watch: true,
  root: views,
  ext: '.ect',
});

if (env === 'production') {
  app.use(express.static(path.join(__dirname, 'static')));
  app.set('trust proxy', 1);
  sessionOptions.cookie.secure = true;
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(helmet.noCache({ noEtag: true }));
app.use(helmet.frameguard());
app.use(cookieParser());
app.use(session(sessionOptions));

app.set('csrfProtection', csurf({ cookie: true }));
app.set('views', views);
app.set('view engine', 'ect');
app.engine('ect', ectRenderer.render);

app.disable('x-powered-by');

app.use(routes);

export default app;
