module.exports = function(grunt) {

    grunt.initConfig({
        connect: {
            demo: {
                options: {
                    keepalive: true
                }
            }
        },
        compass: {
            dist: {
                options: {
                    cssDir: "src",
                    sassDir: "src"
                },
                files: [{
                    expand: true,
                    src: ['src/shape-shifter.scss'],
                    ext: '.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-compass');

};