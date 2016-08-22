var gulp = require('gulp');
// task 任务
// 执行 gulp aaa 就那执行命令
gulp.task('aaa',function(){
	console.log('ss')
})
gulp.task('hello',function(){ // 为了测试 -T ，gulp -T ,看它下面有几个任务
	console.log('wwwww')
})