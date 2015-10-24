// include gulp
var gulp = require('gulp');

// include plug-ins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');


// JShint task
gulp.task('hint', function () {
	gulp.src('./js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});


// Concat task
gulp.task('concat', function () {
	gulp.src('./js/*.js')
		.pipe(concat('MiningDroid.js'))
		.pipe(gulp.dest('./build/'));
});