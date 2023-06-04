# [Simple Pig Latin](https://www.codewars.com/kata/520b9d2ad5c005041100000f/javascript)

# Description

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

# Examples

```js
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
```

# Best and clever solution

```js
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}
```

# Shortest way
```js
pigIt = s => s.split(' ').map(e => e.substr(1) + e[0] + 'ay').join(' ');
```
# My solution
```js
function pigIt(str){
    let words = str.split(' ');
    let arr = [];
    for(itm in words){
        let a = words[itm].slice(1) + words[itm].slice(0,1) + 'ay'
        arr.push(a)
    }
    let res = arr.join(' ')
    return res;
}
```

@apollxo
