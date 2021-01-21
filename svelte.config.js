module.exports = {
  preprocess: require('svelte-preprocess')({
    defaults: {
      script: 'javascript',
      style: 'scss',
    },
    scss: {
      prependData: [
        `@import './src/assets/scss/variables.scss';`,
        `@import './src/assets/scss/mixins.scss';`
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
