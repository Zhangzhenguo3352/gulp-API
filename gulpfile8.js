var gulp = require('gulp')
// 简述 gulp.watch() 第二个 cb  也就是 回调函数 
gulp.task('a-o',function(){
	gulp.src('./app/*/*')
})
gulp.task('watch',function(){
	gulp.watch('./app/*/*',function(event){
		// event.type 变化类型 added为新增,deleted为删除，changed为改变
		//event.path  变化的文件的路径,绝对路径看那个文件 变化
		console.log(event)
	})
})
// gulp watch --gulpfile ./gulpfile8.js