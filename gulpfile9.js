var gulp = require('gulp');
var less = require('gulp-less');
// 编译 less 例子
gulp.task('less',function(){
	gulp.src('./app/less/*.less')
	.pipe(less())
	.pipe(gulp.dest('./dist/css'))

})
// gulp less --gulpfile gulpfile9.js
/*
  index.less 这样写
		  @base:red;
			.red{
				color:@base;
			}
*/