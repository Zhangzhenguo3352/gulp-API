var gulp = require('gulp');
// 这一页 解决 匹配符 应用例子
gulp.task('start',function(){
	gulp.src('./app/*/*.js')
	.pipe(gulp.dest('./dist'))
})
//结果是 app里面的目录( src + index.js )
// gulp start --gulpfile ./gulpfile3.js
