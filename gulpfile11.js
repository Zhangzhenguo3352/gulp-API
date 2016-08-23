var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
// gulp-concat 把几个文件合并到一起，合并的时候排除那个文件
gulp.task('start',function(){
	gulp.src(['./app/js/*.js','!./app/js/tep.js'])
	.pipe($.concat('app.js'))
	.pipe(gulp.dest('./dist/js'))
})
// gulp start --gulpfile ./gulpfile11.js
