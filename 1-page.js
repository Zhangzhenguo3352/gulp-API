
// 标志输入流
process.stdout.write('bbb');

process.stdin.on('data',function(data){
	console.log(data.toString()) // 输入什么 就显示什么
});