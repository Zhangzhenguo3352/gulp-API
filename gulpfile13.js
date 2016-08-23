var gulp = require('gulp');
var $ = require('gulp-load-plugins')(); // 帮你加载 package.json 的 gulp 插件
// 实现 图片压缩
gulp.task('image',function(){
	gulp.src('./app/image/*')	// 入口
	.pipe($.imagemin())     //压缩图片 
	.pipe(gulp.dest('./dist/image')) // 保存到了 image 目录下，没有就自动生成文件目录
})
// gulp image --gulpfile ./gulpfile13.js