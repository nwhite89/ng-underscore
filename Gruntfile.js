module.exports = function (grunt) {
    grunt.initConfig({
        'bower': {
            'install': {
                'options': {
                    'targetDir': './lib'
                }
            }
        },
        'clean': {
            'tmp': ['tmp']
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
                'dest': 'build/ng-lodash.js'
            },
            'options': {
                'modifier': 'modern',
                'exports': [
                    'amd',
                    'commonjs',
                    'node'
                ],
                'iife': 'angular.module(\'ngLodash\', [])' +
                            '.constant(\'lodash\', null)' +
                            '.config(function ($provide) { ' +
                                '%output% ' +
                                '$provide.constant(\'lodash\', _);' +
                            '});',
                'flags': [
                    'debug'
                ]
            }
        },
        'ngmin': {
            'dist': {
                'src': 'build/ng-lodash.js',
                'dest': 'tmp/ng-lodash.min.js'
            }
        },
        'uglify': {
            'dist': {
                'options': {
                    'compress': true,
                    'preserveComments': 'some'
                },
                'files': {
                    'build/ng-lodash.min.js': 'tmp/ng-lodash.min.js'
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
        'uglify',
        'clean:tmp'
    ]);

    // Registers a task to build and test ready for distribution
    grunt.registerTask('dist', [
        'build',
        'test'
    ]);

    grunt.registerTask('default', ['build']);
};
