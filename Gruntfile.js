module.exports = function(grunt) {

    grunt.initConfig({
        ts: {
            default: {
                tsconfig: true
            }
        },
        tslint: {
            default: {
                src: "src/**/*.ts"
            },
            options: {
                configuration: "tslint.json"
            }
        },
        mochaTest: {
            default: {
                src: "test/**/*.js"
            }
        },
        openfin: {
            options: {
                open: true,
                configPath: process.cwd() + '/test/app.json'
            },
            launch: {
                open:true
            }
        }
    });

    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks("grunt-mocha-test");
    grunt.loadNpmTasks('grunt-openfin');

    grunt.registerTask("default", [ "lint", "build" ]);
    grunt.registerTask("test", [ "default", "openfin", "mochaTest" ]);
    grunt.registerTask("lint", [ "tslint" ]);
    grunt.registerTask("build", [ "ts" ]);
}