const {readFile, writeFile} = require('fs').promises


// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)
//**** util.promisify(readFile) makes this function getText() for you ****/

// const getText = (path) => {
// 	return new Promise((resolve,reject) => {
// 		readFile(path, "utf8", (err, res) => {
// 			if(err){
// 				reject(err)
// 				console.log(err);
// 			}
// 			else{
// 				console.log(res);
// 				resolve(res)
// 			}
// 		})
// 	})
// }

const start = async() => {
	try {
		const first = await readFile('../content/first.txt', 'utf8');
		const second = await readFile('../content/second.txt', 'utf8');
		await writeFile('./content/result-mind-greanade.txt', `This is AWESOME ${first} , ${second}`);

		console.log(first, second);
	} catch (error) {
		console.log(error);
	}
}

start();

//resolving promises 
// getText('./content/first.txt')
// 	.then((result) => {console.log(result);})
// 	.catch( (err) => console.log(err))
 