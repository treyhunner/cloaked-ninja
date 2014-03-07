module.exports = function (grunt) {

  grunt.initConfig({
    qunit: {
      options: {
        coverage: {
          src: ['lib/*.js',],
          instrumentedFiles: 'jscov_temp/',
          htmlReport: 'jscov',
          lcovReport: 'jscov',
        },
      },
      files: ['test/*.html'],
    },
  });

  grunt.loadNpmTasks('grunt-qunit-istanbul');

  grunt.registerTask('test', ['qunit']);
  grunt.registerTask('default', ['test']);
};
