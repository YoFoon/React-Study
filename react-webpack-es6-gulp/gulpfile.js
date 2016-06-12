var gulp = require('gulp'),
    sass = require('gulp-sass'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    reload      = browserSync.reload,
    sourcemaps = require('gulp-sourcemap'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js');

gulp.task('default', ["build-js",'browser-sync',"watcher"]);


var myDevConfig = Object.create(webpackConfig);

var devCompiler = webpack(myDevConfig);

//引用webpack对js进行操作
gulp.task("build-js", function(callback) {
    devCompiler.run(function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build-js", err);
        gutil.log("[webpack:build-js]", stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task("watcher", function() {
    gulp.watch('app/**/*', ['build-js']).on('change', reload);
})



// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
});

// 代理
/*gulp.task('browser-sync', function() {
  browserSync.init({
    proxy: "kd.me"
  });
});*/
