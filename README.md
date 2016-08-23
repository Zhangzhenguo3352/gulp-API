# gulp-API
```
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
```
```
var gulp = require('gulp');
var $ = require('gulp-load-plugins')(); // 帮你加载 package.json 的 gulp 插件
// 实现 图片压缩
gulp.task('image',function(){
	gulp.src('./app/image/*')	// 入口
	.pipe($.imagemin())     //压缩图片 
	.pipe(gulp.dest('./dist/image')) // 保存到了 image 目录下，没有就自动生成文件目录
})
// gulp image --gulpfile ./gulpfile13.js
```
```
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
// 我们有的时候 希望有 两个文件，你可以这样做
/*
	1,。压缩前文件
    2,。压缩后文件
*/
// 用到了 重命名插件 gulp-rename
gulp.task('start',function(){
	gulp.src(['./app/js/*.js','!./app/js/tep.js'])
	.pipe($.concat('app.js'))     // 合并到一起 
	.pipe(gulp.dest('./dist/js')) // 写到dist/js 目录下
	.pipe($.uglify()) 			  // 压缩 js
	.pipe($.rename('app.min.js')) // 重命名
	.pipe(gulp.dest('./dist/js')) // 压缩完的 再次写到dist/js 目录下
})
// gulp start --gulpfile ./gulpfile12.js
// 这时候你你看到 dist/js 目录下有两个文件，一个压缩的，一个没有压缩的

```
```
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
// gulp-concat 把几个文件合并到一起，合并的时候排除那个文件
gulp.task('start',function(){
	gulp.src(['./app/js/*.js','!./app/js/tep.js'])
	.pipe($.concat('app.js'))
	.pipe(gulp.dest('./dist/js'))
})
// gulp start --gulpfile ./gulpfile11.js

```
```
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
// gulp-load-plugins 自动帮我们找 package.json 的文件的gulp 插件 例子
gulp.task('start',function(){
	gulp.src('./app/less/*.less')
	.pipe($.less())
	.pipe(gulp.dest('./dist/css'))
})
// gulp start --gulpfile ./gulpfile10.js
```
```
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
```
```
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
```
```
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
```
```
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
```
```
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

```
```
var gulp = require('gulp');
// 这个要实现 多个文件 匹配到了 同时打包
gulp.task('start',function(){
	gulp.src('./app/*/*')
	.pipe(gulp.dest('./dist'))
})
// gulp start --gulpfile ./gulpfile4.js
// 结果是 app里面的目录( src + index.js  &&  css + index.css )
```
```
var gulp = require('gulp');
// 这一页 解决 匹配符 应用例子
gulp.task('start',function(){
	gulp.src('./app/*/*.js')
	.pipe(gulp.dest('./dist'))
})
//结果是 app里面的目录( src + index.js )
// gulp start --gulpfile ./gulpfile3.js

```
```
var gulp =require('gulp');
// 这个页面 想要说明的是 gulp 的工作方式
gulp.task('start',function(){
	gulp.src('./app/index.html') //指定要处理的文件
	// gulp.dest() 指定输出目录，用的
	.pipe(gulp.dest('./dist'))   // 指定要输出的文件路径
})

// 这个里面 要输入,提醒 要在 package.json 同级目录运行 
//  gulp start --gulpfile ./gulpfile2.js
```
```
var gulp = require('gulp');
// task 任务
// 执行 gulp aaa 就那执行命令
gulp.task('aaa',function(){
	console.log('ss')
})
gulp.task('hello',function(){ // 为了测试 -T ，gulp -T ,看它下面有几个任务
	console.log('wwwww')
})
```
