var gulp =require('gulp');
// 这个页面 想要说明的是 gulp 的工作方式
gulp.task('start',function(){
	gulp.src('./app/index.html') //指定要处理的文件
	// gulp.dest() 指定输出目录，用的
	.pipe(gulp.dest('./dist'))   // 指定要输出的文件路径
})

// 这个里面 要输入,提醒 要在 package.json 同级目录运行 
//  gulp start --gulpfile ./gulpfile2.js