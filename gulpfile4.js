var gulp = require('gulp');
// 这个要实现 多个文件 匹配到了 同时打包
gulp.task('start',function(){
	gulp.src('./app/*/*')
	.pipe(gulp.dest('./dist'))
})
// gulp start --gulpfile ./gulpfile4.js
// 结果是 app里面的目录( src + index.js  &&  css + index.css )