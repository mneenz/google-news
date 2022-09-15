const Fiber = require('fibers');
const sass = require('node-sass');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'assets/js/request.js',
        dest: 'assets/build/request.min.js'
      },
      build: {
        src: 'assets/js/menu.js',
        dest: 'assets/build/menu.min.js'
      }
    },
    sass: {
        options: {
            implementation: sass,
            fiber: Fiber,
            sourceMap: true
        },
        dist: {
            files: {
                'assets/build/style.css': 'assets/css/sass/style.scss'
            }
        }
    },
    cssmin: {
      target: {
        files:[{
          src: 'assets/build/style.css',
          dest: 'assets/build/style.min.css',
          ext: '.min.css'
        }]
      }
    },
    watch: {
    scripts: {
      files: ['*.js', '*.css'],
      options: {
        spawn: false,
      },
    },
  },
});


  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass', 'cssmin', 'watch']);

};
