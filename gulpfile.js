let gulp = require('gulp');
let del = require('del');
let plugins = require('gulp-load-plugins')();

// File paths
const VENDOR_SCRIPTS = [
	'node_modules/angular/angular.js',
	'node_modules/@uirouter/angularjs/release/angular-ui-router.js',
	'node_modules/@uirouter/angularjs/release/resolveService.js',
	'node_modules/@uirouter/angularjs/release/stateEvents.js',
	'node_modules/angular-animate/angular-animate.js',
	'node_modules/angular-aria/angular-aria.js',
	'node_modules/angular-sanitize/angular-sanitize.js',
];
const CLIENT_SCRIPTS_PATH = ['client/app/**/*.module.js', 'client/app/**/*.js'];
const SERVER_SCRIPTS_PATH = ['server/**/*.js'];
const STYLE_PATH = 'client/sass/**/*.scss';
const IMAGE_PATH = 'client/assets/images/*';
const FONT_PATH = 'client/assets/fonts/*';
const INDEX_PATH = 'client/assets/index.html';

// Lint
gulp.task('lint', function () {
	gulp.src(CLIENT_SCRIPTS_PATH)
		.pipe(plugins.jshint())
		.on('error', plugins.util.log);
});

// Images
gulp.task('images', function () {
	console.log('---Starting Images task---');
});

// Assets
gulp.task('copyImages', function () {
	console.log('---Starting Copy Images task---');
	return gulp.src([IMAGE_PATH])
		.pipe(gulp.dest('public/images'))
		.on('error', plugins.util.log)
		.pipe(plugins.livereload());
});

gulp.task('copyFonts', function () {
	console.log('---Starting Copy Fonts task---');
	return gulp.src([FONT_PATH])
		.pipe(gulp.dest('public/fonts'))
		.on('error', plugins.util.log)
		.pipe(plugins.livereload());
});

// Index
gulp.task('copyIndex', function () {
	console.log('---Starting Copy Index task---');
	return gulp.src([INDEX_PATH])
		.pipe(gulp.dest('public'))
		.on('error', plugins.util.log)
		.pipe(plugins.livereload());
});

// Styles
gulp.task('styles', function () {
	console.log('---Starting Styles task---');
	return gulp.src('client/sass/main.scss')
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.autoprefixer())
		.pipe(plugins.sass({
			outputStyle: 'compressed'
		}))
		.pipe(plugins.sourcemaps.write())
		.pipe(gulp.dest('public/styles'))
		.on('error', plugins.util.log)
		.pipe(plugins.livereload());
});

// Vendor Scripts
gulp.task('vendorScripts', function () {
	console.log('---Starting Vendor Scripts task---');
	return gulp.src(VENDOR_SCRIPTS)
		.pipe(plugins.concat('vendor.js'))
		.pipe(plugins.uglify())
		.pipe(gulp.dest('public/scripts'));
});

// Client Scripts
gulp.task('clientScripts', ['lint'], function () {
	console.log('---Starting Client Scripts task---');
	return gulp.src(CLIENT_SCRIPTS_PATH)
		.pipe(plugins.ngAnnotate())
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.babel({
			presets: ['es2015']
		}))
		.pipe(plugins.concat('bundle.js'))
		.pipe(plugins.uglify())
		.pipe(plugins.sourcemaps.write())
		.pipe(gulp.dest('public/scripts'))
		.pipe(plugins.livereload());
});

// Server Scripts
gulp.task('serverScripts', function() {
	console.log('---Starting Server Scripts task---');
	return gulp.src([SERVER_SCRIPTS_PATH])
		.pipe(plugins.livereload());
});

// gulp.task('server', function () {
// 	console.log('---Starting Watch task---');
// 	require('./server/server.js');
// 	livereload.listen();
// });

gulp.task('clean', function() {
	return del.sync([
		'public/'
	]);
});

// Default
gulp.task('default', [
	'lint',
	'clean',
	'copyFonts',
	'copyImages',
	'copyIndex',
	'styles',
	'vendorScripts',
	'clientScripts',
	'serve'
], function () {
	console.log('---Starting Default task---');
});

// // Watch
// gulp.task('watch', function () {
// 	console.log('---Starting Watch task---');
// 	gulp.watch([STYLE_PATH], ['styles']);
// 	gulp.watch(CLIENT_SCRIPTS_PATH, ['clientScripts']);
// 	gulp.watch([INDEX_PATH], ['copyIndex']);
// });

// Serve
gulp.task('serve', function() {
	// browserSync.init({
	// 	proxy: 'localhost:3000'
	// });
	// gulp.watch('*.html').on('change', browserSync.reload);

	console.log('---Starting Serve task---');
	require('./server/server.js');
	plugins.livereload.listen();
	gulp.watch(INDEX_PATH, ['copyIndex']);
	gulp.watch(IMAGE_PATH, ['copyImage']);
	gulp.watch(CLIENT_SCRIPTS_PATH, ['clientScripts']);
	gulp.watch(STYLE_PATH, ['styles']);
	gulp.watch(SERVER_SCRIPTS_PATH, ['serverScripts']);
});
