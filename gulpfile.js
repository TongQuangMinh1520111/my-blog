const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const minify = require('gulp-minify');
const browserSync = require('browser-sync').create();

//compile scss into css
function style() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/assets/css'))
    .pipe(browserSync.stream());
}

//compile jade into html
function html() {
  return gulp.src([
    'src/pug/**/*.pug',
    '!src/pug/layouts/*.pug',
    '!src/pug/components/*.pug',
    '!src/pug/mixins/*.pug',
  ])
    .pipe(pug({
      doctype: 'html',
      pretty: true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    },
    port: 4000
  });
  gulp.watch('src/assets/**/*', copyAsset).on('change', browserSync.reload);
  gulp.watch('src/scss/**/*.scss', style).on('change', browserSync.reload);
  gulp.watch('src/pug/**/*.pug', html).on('change', browserSync.reload);
  gulp.watch('src/assets/js/*.js', minifyJs).on('change', browserSync.reload);
}

function copyAsset() {
  return gulp.src(['src/assets/**/*']).pipe(gulp.dest('./dist/assets'));
}

function cleanSource() {
  return del(['dist/**', '!dist']);
}

function minifyJs() {
  return gulp.src('src/assets/js/*.js')
    .pipe(minify({
      ext: {
        min:'.min.js'
      },
      ignoreFiles: ['-min.js']
    }))
    .pipe(gulp.dest('./dist/assets/js'));
}

// define complex tasks
const build = gulp.series(cleanSource, style, html, copyAsset, minifyJs, watch);

// export tasks
exports.build = build;
exports.default = watch;