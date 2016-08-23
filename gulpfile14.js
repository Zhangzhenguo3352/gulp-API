var gulp = require('gulp');
var $ = require('gulp-load-plugins')()
//实现启动一个服务，文件变化重新打包，让浏览器刷新

//1 $connect.server()创建一个服务 
//2 $.watch() 监听文件的 变化
//3 gulp.dest() 让文件，再次输出
	//  $.connect.reload() 输出时 让浏览器刷新
gulp.task('copy',function(){
	gulp.src('./app/*')
	.pipe(gulp.dest('./dist')) // 3
	.pipe($.connect.reload()) //  3-1让浏览器自动刷新
})	
gulp.task('watch',function(){ // 2
	gulp.watch('./app/*',['copy']) // 当文件变化时 就执行 copy 方法

})	
gulp.task('server',function(){  // 1
	$.connect.server({
		root:'./dist', // 服务器的根目录在那个文件夹下
		port:8080,    // 端口的名字
		livereload:true // 启动 实时刷新功能
	})
})
gulp.task('default',['server','watch']) // 启动的名字 default
// gulp default --gulpfile ./gulpfile14.js