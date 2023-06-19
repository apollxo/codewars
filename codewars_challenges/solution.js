
//const ask = prompt("")
//const single = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"]

//Object for Roman symbols 

const single = {
	1: 'I',
	2: "II",
	3: "III",
	4: "IV",
	5: "V",
	6: 'VI',
	7: 'VII',
	8: 'VIII',
	9: "IX",
	10: "X"
}

console.log(single['10'])

const multiple = ["C", "D","M"]

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Enter number', num =>{
	
	
	if (num.length > 2){
		console.log(multiple)
	}
	readline.close()
})


