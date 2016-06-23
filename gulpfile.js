// //////////////////////////////////////////////
// Required
// //////////////////////////////////////////////

var gulp          = require ('gulp');
    uglify        = require ('gulp-uglify');
    rename        = require ('gulp-rename');
    sass          = require ('gulp-sass');
    postcss       = require ('gulp-postcss');
    autoprefixer  = require ('autoprefixer');
    cssnext       = require ('cssnext');
    precss        = require('precss');

// //////////////////////////////////////////////
// Scripts Task
// //////////////////////////////////////////////

gulp.task('scripts', function(){
  gulp.src(['brea-lp/js/**/*.js', '!brea-lp/js/**/*.min.js'])
    .pipe(rename({suffix:'.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('brea-lp/js'));
});

// //////////////////////////////////////////////
// Sass Task
// //////////////////////////////////////////////

gulp.task('styles', function(){
  gulp.src('brea-lp/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('brea-lp/css/'));
});

// //////////////////////////////////////////////
// Postcss Task
// //////////////////////////////////////////////

gulp.task('css', function () {
  var processors = [
    autoprefixer({browsers: ['last 3 versions']}),
    cssnext,
    precss
  ];
  return gulp.src('brea-lp/css/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});

// //////////////////////////////////////////////
// Watch Task
// //////////////////////////////////////////////

gulp.task('watch', function(){
  gulp.watch('brea-lp/js/**/*.js', ['scripts']),
  gulp.watch('brea-lp/scss/style.scss', ['styles']),
  gulp.watch('brea-lp/css/**/.*css', ['css']);
});

// //////////////////////////////////////////////
// Default Task
// //////////////////////////////////////////////

gulp.task('default', ['scripts', 'watch']);
