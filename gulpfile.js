var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    gulpcss = require('gulp-clean-css'),
    browserSync = require('browser-sync').create(),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    imageResize = require('gulp-image-resize'),
    imageminPngquant = require('imagemin-pngquant'),
    del = require('del'),
    concat = require('gulp-concat');

var jsOrder = [
    'js/models/*.js',
    'js/collections/*.js',
    'js/views/*.js',
    'js/**/*.js'
];

// Styles
gulp.task('styles', function() {
    return gulp.src('css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulpcss())
        .on('error', function (err) { console.log(console.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest('dist/css'));
});

// Scripts
gulp.task('scripts', function() {
    return gulp.src(jsOrder)
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .on('error', function (err) { console.log(console.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest('dist/js'));
});

// Images
gulp.task('images', function() {
    return gulp.src('images/*.png')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [imageminPngquant({
                quality: '65-80',
                speed: 4
            })]
        }))
        .pipe(gulp.dest('dist/images'));
});

// Clean
gulp.task('clean', function(cb) {
    del(['dist/images', 'dist/js', 'dist/css'], cb);
});


gulp.task('default', gulp.series(gulp.parallel('scripts', 'styles'), function() {
    gulp.watch('css/**/*.css', gulp.series('styles'));
    gulp.watch('js/**/*.js', gulp.series('scripts'));
    gulp.watch('images/*.png', gulp.series('images'));
    gulp.watch('index.html').on('change', browserSync.reload);
    gulp.watch('./dist/css/*.css').on('change', browserSync.reload);
    browserSync.init({
        server: '.'
    });
}));
