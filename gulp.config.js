import path from 'path';
import webpackConfig from './webpack.config.babel';
const join = path.join;
// const relative = path.relative;
const base = join(__dirname, 'src');
const client = `${base}/client`;
const assets = `${base}/assets`;
const dist = `${base}/dist`;
const build = `${base}/build`;

const config = {
  dest: dist,
  clean: {
    src: [dist, build],
  },
  css: {
    base: `${dist}`,
    src: ['**/*.css', build],
  },
  assets: {
    base: `${assets}`,
    src: [dist, build],
  },
  js: {
    base: `${dist}`,
    src: ['**/*.+js', build],
  },
  lint: {
    base: `${base}`,
    src: '**/*.+(js|jsx)',
  },
  webpack: {
    base: `${client}`,
    dest: `${dist}`,
    options: webpackConfig,
  },
};

export default config;
