var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css');

//script paths
var jsFiles = 'js/**/*.js',
    jsDest = 'dist/js',
    cssFiles = 'css/**/*.css',
    cssDest = 'dist/css';

gulp.task("default", ["scripts", "css"]);

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('css', function() {
  return gulp.src(cssFiles)
    .pipe(cleanCSS({compatibility: 'ie10'}))
    .pipe(gulp.dest(cssDest));
});
