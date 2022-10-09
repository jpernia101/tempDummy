//No window in NODE but there is some Globals
/*
	some popular Globals 
		__dirname  - path to current directory
		__filename - file name
		require - function to use modules( CommonJS)
		module	- info about current module (file)
		process  - info about env where the program is being executed 
*/

const name = 'sally'
console.log(__dirname)
setInterval( () => {
	console.log("hello world")
}, 1000)