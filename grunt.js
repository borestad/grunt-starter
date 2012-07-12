/*global module:false*/
module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-requirejs');

    // Project configuration.
    grunt.initConfig({
        pkg: '<json:package.json>',
        meta: {
            banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                    '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
                    '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
                    ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
        },
        requirejs: {
            dir: 'build',
            baseUrl: 'js',
            paths: {
                underscore: 'vendor/js/underscore-1.3.3.min.js',
                jquery: 'vendor/js/jquery-1.7.2.min.js'
            },
            pragmas: {
                doExclude: true
            },
            skipModuleInsertion: false,
            optimizeAllPluginResources: true,
            findNestedDependencies: true,
            modules: [{name: 'src/modules/main'}],
            out: 'public/js/main-build.js'
        },
        // concat: {
        //     dist: {
        //         src: ['<banner:meta.banner>', '<file_strip_banner:src/<%= pkg.name %>.js>'],
        //         dest: 'dist/<%= pkg.name %>.js'
        //     }
        // },
        // min: {
        //     dist: {
        //         src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        //         dest: 'dist/<%= pkg.name %>.min.js'
        //     }
        // },
        // qunit: {
        //     files: ['test/**/*.html']
        // },
        lint: {
            files: ['grunt.js', 'src/**/*.js', 'test/**/*.js']
        },
        // watch: {
        //     files: '<config:lint.files>',
        //     tasks: 'lint qunit'
        // },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true, /* Allow 'document' et al */
                devel: true /* Allow 'console' */
            },
            globals: {
                jQuery: true
            }
        }
        // uglify: {}
    });

    // Default task.
    grunt.registerTask('default', 'lint requirejs');
};
