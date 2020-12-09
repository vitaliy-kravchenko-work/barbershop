const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
var tinypng = require('gulp-tinypng-compress');
const { series } = require('gulp');

// minifyCSS

function minifyCSSFunction(cb) {
    return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css/'));

    cb();
}
  
exports.minifyCSS = minifyCSSFunction

// moveJS

function moveJSFunction(cb) {
    return gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/js/'));

    cb();
}
  
exports.moveJS = moveJSFunction

// minifyHTML

function minifyHTMLFunction(cb) {
    return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/'));

    cb();
}
  
exports.minifyHTML = minifyHTMLFunction

// fonts

function fontsFunction(cb) {
    return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));

    cb();
}
  
exports.fonts = fontsFunction

// tinypng

function tinypngFunction(cb) {
    gulp.src('src/img/**/*.{png,jpg,jpeg}')
    .pipe(tinypng({
        key: 'xbgSFlDk30FLd49DcH6Zx06z9KKZTnGn',
        sigFile: 'images/.tinypng-sigs'
    }))
    .pipe(gulp.dest('dist/img'));

    cb();
}
  
exports.tinypng = tinypngFunction

// moveSVG

function moveSVGFunction(cb) {
    gulp.src('src/img/**/*.svg')
    .pipe(gulp.dest('dist/img'));

    cb();
}
  
exports.moveSVG = moveSVGFunction

exports.build = series(minifyCSSFunction, moveJSFunction, minifyHTMLFunction, fontsFunction, tinypngFunction, moveSVGFunction);