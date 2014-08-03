module.exports = function (grunt) {
    grunt.initConfig({
        'bower': {
            'install': {
                'options': {
                    'targetDir': './lib'
                }
            }
        },
        'jshint': {
            'src': [
                './*.js',
                './test/*.js'
            ],
            'options': {
                'jshintrc': '.jshintrc'
            }
        },
        'jscs': {
            'src': '<%= jshint.src %>'
        },
        'karma': {
            'options': {
                'configFile': 'karma.conf.js'
            },
            'test': {
                'reporters': ['progress']
            }
        },
        'lodash': {
            'target': {
                'dest': 'build/ng-underscore.js'
            },
            'options': {
                'modifier': 'underscore',
                'exports': [
                    'amd',
                    'commonjs',
                    'node'
                ],
                'iife': 'angular.module(\'ngUnderscore\', [])' +
                            '.constant(\'underscore\', null)' +
                            '.config(function ($provide) { ' +
                                '%output% ' +
                                '$provide.constant(\'underscore\', lodash);' +
                            '});',
                'flags': [
                    'debug'
                ]
            }
        },
        'ngmin': {
            'dist': {
                'src': 'build/ng-underscore.js',
                'dest': 'build/ng-underscore.js'
            }
        },
        'uglify': {
            'dist': {
                'options': {
                    'compress': {
                        unused: false
                    },
                    'preserveComments': 'some'
                },
                'files': {
                    'build/ng-underscore.min.js': 'build/ng-underscore.js'
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    // Registers a task to run Karma tests and installs any pre-requisites
    // needed.
    grunt.registerTask('test', [
        'jshint',
        'jscs',
        'bower:install',
        'karma:test'
    ]);

    // Registers a task to build the ngLodash module
    grunt.registerTask('build', [
        'lodash',
        'ngmin',
        'uglify'
    ]);

    // Registers a task to build and test ready for distribution
    grunt.registerTask('dist', [
        'build',
        'test'
    ]);

    grunt.registerTask('default', ['build']);
};
