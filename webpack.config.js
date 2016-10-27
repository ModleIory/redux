var webpack = require('webpack')
var path = require('path')
var argument = require('yargs').argv

var root = __dirname

var COUNT = path.resolve(root,'count')
var TODO = path.resolve(root,'todo')
var TODOS = path.resolve(root,'todos')
var ROUTER = path.resolve(root,'router')
var FAIRY = path.resolve(root,'fairy')
var MODLE = path.resolve(root,'modle')
var POST = path.resolve(root,'post')

var type = argument.type

var IN 
//根据参数判断在哪个文件夹执行webpack
if(type=='count'){
	IN = COUNT
	console.log('count')
}else if(type=='todo'){
	IN = TODO
	console.log('todo')
}else if(type=='todos'){
	IN = TODOS
	console.log('todos')
}else if(type=='router'){
	IN = ROUTER
	console.log('router')
}else if(type=='fairy'){
	IN = FAIRY
	console.log('fairy')
}else if(type=='modle'){
	IN = MODLE
	console.log('modle')
}else if(type == 'post'){
	IN = POST
	console.log('post')
}


module.exports = {
	entry:{
		index:path.resolve(IN,'src/index.js')
	},
	output:{
		path:IN,
		filename:'[name].bundle.js'
	},
	module:{
		loaders:[
				{
					test:/\.js$/,
					loader:'babel',
					query:{
						presets:['es2015','react']
					}
				}
		]
	}
}
