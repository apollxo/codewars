# [Replace With Alphabet Position]('https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript')

## Description:

Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it. *

`"a" = 1`.`"b" = 2` etc.

# Example

```
alphabetPosition("The sunset sets at twelve o' clock.")
```
Should return 
` "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" `
( as a string )


______________________________________________________________________________

# My answer:

```
function alphabetPosition(text) {
  let arr = [];
  let reg = /^[a-zA-Z]+$/;
  let text2 = text.toLowerCase()
  for (let i = 0; i < text2.length; i++) {
  	if(reg.test(text2[i]) && text2.charCodeAt(i) != 32){
      arr.push(text2.charCodeAt(i) - 96);
    }   
  }
  return arr.join(' ')
}
```

Here is similar answer to mine which earned many upvotes [link](https://www.codewars.com/kata/reviews/56002d1c656fe9438f00001b/groups/56237bd05cfa225ccf0000a6)

# One line answer [link](https://www.codewars.com/kata/reviews/56002d1c656fe9438f00001b/groups/5620329b94bece03de0000be)

```
let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');
```

# Best answer by ChatGPT :) lol

```
function alphabetPosition(text) {
  return text
    .toLowerCase()
    .split('')
    .filter((char) => char >= 'a' && char <= 'z')
    .map((char) => char.charCodeAt(0) - 96)
    .join(' ');
}
```
