var gulp = require('gulp');
// 这个页面 说的是 依赖的事
gulp.task('tomato',function(){
	console.log('西红柿OK')
})
gulp.task('egg',function(){
	console.log('鸡蛋ok')
})
gulp.task('cooking',['tomato','egg'],function(){
	console.log('炒菜OK')
});
gulp.task('eat',['cooking'],function(){
	console.log('吃饭')
});
// gulp eat --gulpfile ./gulpfile5.js
// 查看 任务依赖  gulp -T --gulpfile ./gulpfile5.js
