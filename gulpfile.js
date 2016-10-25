var gulp = require('gulp')
var shell = require('gulp-shell')
// var argument = require('yargs').argv


gulp.task('shell',shell.task([
	"webpack -d -p --type=router"
]))

gulp.task('router',function(){
	gulp.watch(['router/src/*.js'],['shell'])
})