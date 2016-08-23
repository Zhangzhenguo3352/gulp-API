var gulp = require('gulp');
// watch 监听 文件的变化，当文件变化时 就会执行第二个参数的方法
// 多文件 多监控 ，文件变化，就更新
gulp.task('a-0',function(){
	gulp.src('./app/*/*')
	.pipe(gulp.dest('./dist'))
})
gulp.task('watch',function(){
	gulp.watch('./app/*/*',['a-0'])
})
// gulp watch --gulpfile ./gulpfile7.js
// 结果是 app里面的目录
//( src + index.js  &&  css + index.css  &&  watch + watch.html)