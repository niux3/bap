var Grunt = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        watch: {
            css: {
                files: ['src/scss/**/*.scss', 'src/scss/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            },
            img: {
                files: ['src/img/**/*.png', 'src/img/**/*.jpg', 'src/img/*.png', 'src/img/*.jpg'],
                tasks: ['img'],
                options: {
                    spawn: false,
                },
            },
        },
        // img:{
        //     src: ['img/**/*.png','img/**/*.jpg', 'img/*.png','img/*.jpg'],
        //     dest: '../public/img'
        // },
        image: {
            static: {
                options: {
                    pngquant: true,
                    optipng: false,
                    zopflipng: true,
                    jpegRecompress: false,
                    mozjpeg: true,
                    guetzli: false,
                    gifsicle: true,
                    svgo: true
                }//,
                // files: {
                //     'dist/img.png': 'src/img.png',
                //     'dist/img.jpg': 'src/img.jpg',
                //     'dist/img.gif': 'src/img.gif',
                //     'dist/img.svg': 'src/img.svg'
                // }
            },
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/img/',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: 'public/img'
                }]
            }
        },

        sass: {
            compile: {
                options: {
                    check: false,
                    style: 'compressed',
                },
                files: {
                    'public/css/min.css': ['src/scss/index.scss'],
                },
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'public/css/min.css': ['src/css/index.css']
                }
            }
        }
    });
    grunt.registerTask('default', ['browserify', 'uglify']);
    grunt.registerTask('css', ['sass']);
    grunt.registerTask('img', ['image']);
};
module.exports = Grunt;
