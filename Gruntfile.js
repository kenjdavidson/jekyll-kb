module.exports = function(grunt) {

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      copy: {
        jekyll: {
          files: [
            { expand: true, cwd: 'node_modules/jquery/dist', src: 'jquery.min.*', dest: 'assets/js/jquery' },
            { expand: true, cwd: 'node_modules/bootstrap/dist/js', src: 'bootstrap.bundle.min.*', dest: 'assets/js/bootstrap' },            
            { expand: true, cwd: 'node_modules/scrollmagic/scrollmagic/minified', src: '**', dest: 'assets/js/scrollmagic' },
            { expand: true, cwd: 'node_modules/bootstrap/scss', src: '**', dest: '_sass/bootstrap' },
            { expand: true, cwd: 'node_modules/gsap/dist', src: 'gsap.*', dest: 'assets/js/scrollmagic' },
            { expand: true, cwd: 'node_modules/@fortawesome/fontawesome-free/webfonts', src: '**', dest: 'assets/webfonts' },
            { expand: true, cwd: 'node_modules/@fortawesome/fontawesome-free/scss', src: '**', dest: '_sass/fontawesome' },
            { expand: true, cwd: 'node_modules/bootswatch/dist', src: '**/*.scss', dest: '_sass/bootswatch' }
          ]
        }
      }
    });
  
    // Plugins
    grunt.loadNpmTasks('grunt-contrib-copy');
  
    // copyjekyll should be used to copy all required files from node_modules to their appropriate locations
    // within the Jekyll project structure.
    grunt.registerTask('jekyll', ['copy:jekyll']);
  
  };