import path from 'path';
import webpackConfig from './webpack.config.babel';
const join = path.join;
// const relative = path.relative;
const base = join(__dirname, 'src');
const assets = `${base}/assets`;
const dist = `${base}/dist`;
const build = `${base}/build`;

const config = {
  clean: {
    src: [dist, build],
  },
  css: {
    base: dist,
    src: ['**/*.css', build],
  },
  assets: {
    base: assets,
    src: [dist, build],
  },
  js: {
    base: dist,
    options: {
      opts: {
        destination: './docs/client',
      },
      templates: {
        default: {
          outputSourceFiles: true,
        },
        linenums: true,
      },
    },
    src: ['**/*.js', build],
  },
  lint: {
    base: `${base}`,
    src: '**/*.+(js|jsx)',
  },
  webpack: {
    base: `${base}/client`,
    dest: dist,
    options: webpackConfig,
  },
};

export default config;
