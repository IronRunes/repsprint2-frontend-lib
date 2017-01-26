module.exports = function (grunt) {

    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            always: {
                options: {
                    paths: ['src/css/less'],
                    plugins: [
                        new (require('less-plugin-clean-css'))({advanced: true})
                    ],
                },
                files: {
                    'dist/css/main.css': 'src/less/main.less'

                }
            }
        },
        uglify: {
            js: {
                options: {
                    preserveComments: false
                },
                files: {
                    'dist/js/script.min.js': ['src/js/script.js']
                }
            }
        },
        watch: {
            less: {
                files: 'src/less/*',
                tasks: 'less:always',
                options: {
                    livereload: true
                }
            },
            uglify: {
                files: 'src/js/script.js',
                tasks: 'uglify:js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};
