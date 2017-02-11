(function () {
    'use strict';

    var gulp = require('gulp');

    //var jsHint = require('gulp-jshint');
    var esLint = require('gulp-eslint');

    var jsFiles = ['*.js', 'src/**/*.js'];
    
    gulp.task('style', function () {
        return gulp.src(jsFiles)
            //.pipe(jsHint())
            //.pipe(jsHint.reporter('jshint-stylish', {
            //    verbose: true
            //}))
            .pipe(esLint())
            .pipe(esLint.format())
            .pipe(esLint.failAfterError());
    });
}());