var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
// gulp-load-plugins 自动帮我们找 package.json 的文件的gulp 插件 例子
gulp.task('start',function(){
	gulp.src('./app/less/*.less')
	.pipe($.less())
	.pipe(gulp.dest('./dist/css'))
})
// gulp start --gulpfile ./gulpfile10.js