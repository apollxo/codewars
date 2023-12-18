# [Weird String Case](https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript)

## Instructions:
Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces`(' ')`. Spaces will only be present if there are multiple words. Words will be separated by a single space`(' ')`.
Examples:
```
"String" => "StRiNg"
"Weird string case" => "WeIrD StRiNg CaSe"
```

### My solution:
```js
function toWeirdCase(string){
 let arr = string.split(' ');
 console.log(arr)
 arr.map((word, index) =>{
 	let newWord = '';
 	for(let i = 0; i < word.length; i++){
 		newWord += i % 2 == 0 ? word[i].toUpperCase() : word[i].toLowerCase()
 	}
 	arr[index] = newWord
 })
 return arr.join(' ')
}
```

### [Best practice:](https://www.codewars.com/kata/reviews/52b76f8536d582d13c0006af/groups/538062216ea5242f700006f6)
```js
function toWeirdCase(string){
  return string.split(' ').map(function(word){
    return word.split('').map(function(letter, index){
      return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
    }).join('');
  }).join(' ');
}
```

### [Clever](https://www.codewars.com/kata/reviews/52b76f8536d582d13c0006af/groups/56babf0e38dd34cfc70005ce)
```js
function toWeirdCase(string){
  return string.replace(/(\w{1,2})/g,(m)=>m[0].toUpperCase()+m.slice(1))
}
```
