/* 
	fs module can be of 2 flavors 
	Blocking/Non-Blocking so Async or Sync
*/

const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log(first,second);

//if content doesnt exist it'll create it otherwise it'll overwrite it 
// unless u use the "flag: 'a'  in the 3rd parameter which lets you just append" 
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'})