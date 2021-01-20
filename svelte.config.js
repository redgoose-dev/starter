const prod = process.env.NODE_ENV === 'production';

module.exports = {
  preprocess: require('svelte-preprocess')({
    defaults: {
      style: 'scss',
    },
    scss: {
      prependData: [
        `@import './src/scss/variables.scss';`,
        `@import './src/scss/mixins.scss';`
      ].join('\n'),
    },
    postcss: {
      plugins: [
        require('autoprefixer')({}),
      ],
    },
    sourceMap: false,
  }),
}
