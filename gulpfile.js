let gulp = require('gulp');
let del = require('del');
let bs = require('browser-sync').create();
let rs = require('gulp-run-sequence');
let plugins = require('gulp-load-plugins')();

// File paths
const VENDOR_SCRIPTS = [
  'node_modules/angular/angular.js',
  'node_modules/angular-animate/angular-animate.js',
  'node_modules/@uirouter/angularjs/release/angular-ui-router.js',
  'node_modules/@uirouter/angularjs/release/resolveService.js',
  'node_modules/@uirouter/angularjs/release/stateEvents.js',
  'node_modules/angular-aria/angular-aria.js',
  'node_modules/angular-sanitize/angular-sanitize.js'
];
const CLIENT_SCRIPTS_PATH = ['client/app/**/*.module.js', 'client/app/**/*.js'];
const SERVER_SCRIPTS_PATH = ['server/**/*.js'];
const STYLE_PATH = 'client/sass/**/*.scss';
const IMAGE_PATH = 'client/assets/images/*';
const FONT_PATH = [
  'client/assets/fonts/*',
  'node_modules/font-awesome/fonts/*'
];
const INDEX_PATH = 'client/assets/index.html';

function onError(err) {
  plugins.util.log(
    plugins.util.colors.red('\nError (' + err.plugin + '): ' + err.message)
  );
  this.emit('end');
}

// ===============================================
// ASSETS
gulp.task('copyImages', function() {
  console.log('---Starting Copy Images task---');
  return gulp
    .src([IMAGE_PATH])
    .pipe(
      plugins.plumber({
        errorHandler: onError
      })
    )
    .pipe(gulp.dest('public/images'));
});

gulp.task('copyFonts', function() {
  console.log('---Starting Copy Fonts task---');
  return gulp
    .src(FONT_PATH)
    .pipe(
      plugins.plumber({
        errorHandler: onError
      })
    )
    .pipe(gulp.dest('public/fonts'));
});

// Index
gulp.task('copyIndex', function() {
  console.log('---Starting Copy Index task---');
  return gulp
    .src([INDEX_PATH])
    .pipe(
      plugins.plumber({
        errorHandler: onError
      })
    )
    .pipe(gulp.dest('public'));
});

// UI Carousel scipt and css
gulp.task('copyUICarousel', function() {
  gulp
    .src('client/assets/ui-carousel/ui-carousel.min.js')
    .pipe(gulp.dest('public/scripts'));
  gulp
    .src('client/assets/ui-carousel/ui-carousel.min.css')
    .pipe(gulp.dest('public/styles/ui-carousel'));
  gulp
    .src('client/assets/ui-carousel/fonts/*')
    .pipe(gulp.dest('public/styles/ui-carousel/fonts'));
});
// END ASSETS
// ===============================================

// ===============================================
// STYLES
gulp.task('styles', function() {
  console.log('---Starting Styles task---');
  return gulp
    .src('client/sass/main.scss')
    .pipe(
      plugins.plumber({
        errorHandler: onError
      })
    )
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.autoprefixer())
    .pipe(
      plugins.sass({
        outputStyle: 'compressed'
      })
    )
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('public/styles'))
    .pipe(bs.stream());
});
// END STYLES
// ===============================================

// ===============================================
// SCRIPTS
// Lint
gulp.task('lint', function() {
  gulp
    .src(CLIENT_SCRIPTS_PATH)
    .pipe(
      plugins.plumber({
        errorHandler: onError
      })
    )
    .pipe(plugins.jshint());
});

gulp.task('vendorScripts', function() {
  console.log('---Starting Vendor Scripts task---');
  return gulp
    .src(VENDOR_SCRIPTS)
    .pipe(plugins.concat('vendor.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('public/scripts'));
});

gulp.task('clientScripts', ['lint'], function() {
  console.log('---Starting Client Scripts task---');
  return gulp
    .src(CLIENT_SCRIPTS_PATH)
    .pipe(plugins.ngAnnotate())
    .pipe(plugins.sourcemaps.init())
    .pipe(
      plugins.babel({
        presets: ['es2015']
      })
    )
    .pipe(plugins.concat('bundle.js'))
    .pipe(plugins.uglify())
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('public/scripts'));
});
// END SCRIPTS
// ===============================================

gulp.task('clean', function() {
  return del.sync(['public/']);
});

// ===============================================
// SERVER
gulp.task('server', function(cb) {
  let serverStarted = false;
  return plugins
    .nodemon({
      script: './server/server.js',
      ext: './server/**/*.js',
      env: {
        NODE_ENV: 'development'
      },
      watch: [SERVER_SCRIPTS_PATH]
    })
    .on('start', function() {
      if (!serverStarted) {
        console.log('---- Server initial start ----');
        serverStarted = true;
        cb();
      }
    })
    .on('restart', function() {
      console.log('---- Server restart ----');
      bs.reload();
    })
    .once('quit', function() {
      console.log('---- Server exiting ----');
      process.exit();
    });
});
// END SERVER
// ===============================================

// ===============================================
// BROWSER SYNC
gulp.task('browser-sync', ['server'], function() {
  bs.init(null, {
    proxy: 'http://localhost:3000',
    port: 3001,
    notify: false,
    reloadDelay: 1500
  });
});
// END BROWSER SYNC
// ===============================================

// ===============================================
// WATCH
gulp.task('watch', ['browser-sync'], function() {
  gulp.watch(INDEX_PATH, ['copyIndex']);
  gulp.watch(IMAGE_PATH, ['copyImage']);
  gulp
    .watch(CLIENT_SCRIPTS_PATH, ['clientScripts-watch'])
    .on('change', bs.reload);
  gulp.watch(STYLE_PATH, ['styles']);
});

gulp.task('clientScripts-watch', ['clientScripts'], function(done) {
  bs.reload();
});
// END WATCH
// ===============================================

// ===============================================
// RUN SEQUENCE
gulp.task('run-seq', function(cb) {
  rs(
    'clean',
    [
      'lint',
      'copyFonts',
      'copyImages',
      'copyIndex',
      'copyUICarousel',
      'styles',
      'vendorScripts',
      'clientScripts'
    ],
    'watch',
    cb
  );
});
// END RUN SEQUENCE
// ===============================================

// ===============================================
// DEFAULT
gulp.task('default', ['run-seq'], function() {
  console.log('---Starting Default task---');
});
// END DEFAULT
// ===============================================
