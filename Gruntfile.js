module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.initConfig({
        protractor: {
            options: {
                configFile: "typeScript/config/config.js", // Default config file
                keepAlive: true, // If false, the grunt process stops when the test fails.
                noColor: false, // If true, protractor will not use colors in its output.
                args: {
                    // Arguments passed to the command
                }
            },
            test: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
                options: {
                    configFile: "typeScript/config/config.js", // Target-specific config file
                    args: {} // Target-specific arguments
                }
            },
        },
    });
    grunt.registerTask('test', ['protractor']);
}