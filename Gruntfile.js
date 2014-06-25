module.exports = function(grunt) {
    grunt.initConfig({
        'clean': {
            tmp: ['tmp']
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
                            '.value(\'lodash\', null)' +
                            '.config([\'$provide\', function ($provide) { ' +
                                '%output% ' +
                                '$provide.value(\'lodash\', _);' +
                            '}]);',
                'flags': [
                    'debug'
                ]
            }
        },
        'ngmin': {
            dist: {
                src: 'build/ng-lodash.js',
                dest: 'tmp/ng-lodash.min.js'
            }
        },
        'uglify': {
            dist: {
                options: {
                    compress: true,
                    preserveComments: 'some'
                },
                files: {
                    'build/ng-lodash.min.js': 'tmp/ng-lodash.min.js'
                }
            }
        },
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('build', ['lodash', 'ngmin', 'uglify', 'clean:tmp']);
    grunt.registerTask('default', ['build']);
};
