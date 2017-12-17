var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var shell = require('gulp-shell')
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var uncss = require('gulp-uncss');

gulp.task('css', function() {
  return gulp.src(['./node_modules/tachyons*/css/*.min.css', './custom.css'])
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./css'))
});

gulp.task('clean', function () {
    return gulp.src(['./node_modules/tachyons*/css/*.min.css', './custom.css'])
        .pipe(concat('main.css'))
        .pipe(uncss({
            html: ['index.html', './_site/**/*.*']
        }))
        .pipe(cssnano())
        .pipe(gulp.dest('./_site/css'));
});

gulp.task('build', function () {
  return gulp.src('*.js', {read: false})
    .pipe(shell([
      'jekyll build --watch'
    ]));
})

gulp.task('serve', function () {

    browserSync({
      server: './_site',
      host: '0.0.0.0',
      port: 4000,
    });

    gulp.watch(['./_*/**/*.*', './images/**/*.*', './index.html', '!./_site/**/*.*']).on('change', reload);
});

gulp.task('default', ['css', 'serve', 'build']);
