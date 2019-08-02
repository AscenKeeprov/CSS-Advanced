'use strict';

const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const styleDestination = './';
const styleSource = 'style.scss';

gulpSass.compiler = require('node-sass');

function loadStyles() {
	return gulp.src(`${styleSource}`)
		.pipe(gulpSass({
			indentType: 'tab',
			indentWidth: 1,
			linefeed: 'crlf',
			outputStyle: 'expanded'
		}).on('error', gulpSass.logError))
		.pipe(gulp.dest(`${styleDestination}`));
}

function watchForChanges() {
	gulp.watch(`${styleSource}`, loadStyles);
}

exports.default = gulp.series(loadStyles, watchForChanges);
