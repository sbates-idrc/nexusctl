/*
Copyright 2017 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://raw.githubusercontent.com/simonbates/nexusctl/master/LICENSE.txt
*/

/* eslint-env node */

"use strict";

module.exports = function (grunt) {

    grunt.initConfig({
        eslint: {
            all: ["**/*.js"]
        },
        jsonlint: {
            all: ["package.json", ".eslintrc.json"]
        }
    });

    grunt.loadNpmTasks("fluid-grunt-eslint");
    grunt.loadNpmTasks("grunt-jsonlint");

    grunt.registerTask("default", ["lint"]);
    grunt.registerTask("lint", "Run eslint and jsonlint", ["eslint", "jsonlint"]);
};
