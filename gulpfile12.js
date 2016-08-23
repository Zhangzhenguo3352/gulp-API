var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
// 我们有的时候 希望有 两个文件，你可以这样做
/*
	1,。压缩前文件
    2,。压缩后文件
*/
// 用到了 重命名插件 gulp-rename
gulp.task('start',function(){
	gulp.src(['./app/js/*.js','!./app/js/tep.js'])
	.pipe($.concat('app.js'))     // 合并到一起 
	.pipe(gulp.dest('./dist/js')) // 写到dist/js 目录下
	.pipe($.uglify()) 			  // 压缩 js
	.pipe($.rename('app.min.js')) // 重命名
	.pipe(gulp.dest('./dist/js')) // 压缩完的 再次写到dist/js 目录下
})
// gulp start --gulpfile ./gulpfile12.js
// 这时候你你看到 dist/js 目录下有两个文件，一个压缩的，一个没有压缩的
