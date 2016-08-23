var gulp = require('gulp');
// 简述：第三个参数 函数 ，添加 aaa 参数，用来通知任务已经完成
gulp.task('tomato',function(aaa){
	setTimeout(function(){ // 模拟异步情况，
		console.log('西红柿OK')
		aaa()
	},1000)
})
gulp.task('egg',function(aaa){
	setTimeout(function(){ // 模拟异步情况，
		console.log('鸡蛋ok')
		aaa()
	},1000)
})
gulp.task('cooking',['tomato','egg'],function(){
	console.log('炒菜OK')
});
gulp.task('eat',['cooking'],function(){
	console.log('吃饭')
});
// gulp eat --gulpfile ./gulpfile6.js