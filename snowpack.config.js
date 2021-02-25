const path = require('path');

module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  devOptions: {
    port: Number(process.env?.PORT || 3000),
    hostname: '0.0.0.0',
    open: 'none',
    hmr: true,
  },
  buildOptions: {
    out: 'build',
    baseUrl: './',
    clean: true,
    metaUrlPath: '_snowpack',
    sourceMap: true,
  },
  alias: {
    '~': path.resolve(__dirname, './src'),
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-sass',
  ],
};
