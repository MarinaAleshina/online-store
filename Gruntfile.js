module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // sprite: {
        //     all: {
        //         src: 'images/icons/*',
        //         dest: 'images/sprite.png',
        //         destCss: 'sass/_sprites.scss',
        //         imgPath: '../images/sprite.png',
        //         padding: 2
        //     }
        // },

        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'compressed'
            },
            dist: {
                files: {
                    'assets/main.min.css': 'sass/main.scss'
                }
            }
        },

        uglify: {
            my_target: {
                options: {
                    sourceMap: true
                },
                files: {
                    'assets/main.min.js': [
                        'js/jquery-3.3.1.min.js',
                        'js/libs/**/*',
                        'js/main.js'
                    ]
                }
            }
        },

        watch: {
            sprite: {
                files: ['images/icons/*'],
                tasks: ['sprite']
            },
            sass: {
                files: ['sass/**/*'],
                tasks: ['sass']
            },
            uglify: {
                files: ['js/**/*'],
                tasks: ['uglify']
            }
        }

    });

    // grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', 'build');
    grunt.registerTask('build', ['sass', 'uglify']);

};
