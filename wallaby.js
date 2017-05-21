module.exports = wallaby => ({
  files: [
    "api/**/*.js",
    "impl/**/*.js"
  ],

  tests: [
    "tests/**/*.js"
  ],

  env: {
    type: "node"
  },

  compilers: {
    // .babelrc contains { "presets": ["flow","es2015","stage-0"] }
    '**/*.js': wallaby.compilers.babel()
  },

  bootstrap: () => {
    require('babel-polyfill');
  },
  
  runAllTestsInAffectedTestFile: true
});
