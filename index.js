// Tasks: 

// - write the JS so that the word count appears on the screen
// - update the count as the user types


const textBox = document.getElementById("txtid")
const count = document.getElementById("count")

textBox.addEventListener('keyup', (event) =>{
		countWords(Object.assign([], textBox.value))
})

function countWords(content){
	console.log(content)
	//console.log(content.length)
	let wordCount = 0
	let isNew = true
	console.log(isNew)
	for (let i = 0; i < content.length; i++){
		if (content[i] !== ' ' && content[i] !== '\n' && content[i] !== '\t') {
			if (isNew === true) {
				++wordCount
				isNew = false
			}
		} else {
			isNew = true
		}
	}
	console.log(wordCount)
	count.innerText = wordCount
}