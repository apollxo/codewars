# [Make the Deadfish Swim](https://www.codewars.com/kata/51e0007c1f9378fa810002a9/javascript)

### Details:
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

`i` increments the value (initially 0)
`d` decrements the value
`s` squares the value
`o` outputs the value into the return array
Invalid characters should be ignored.

`parse("iiisdoso") => [ 8, 64 ]`

## My solution:

```js
function parse( data )
{
  let arr = [];
  let a = 0;
  let splitted = data.split('')
  for(let i = 0; i < splitted.length; i++){
    switch(splitted[i]){
        case 'i':
          a++
          break;
        case 'd':
          a--;
          break;
        case 's':
          a *= a ;
          break;
        case 'o':
          arr.push(a)
          break;
        default:
          console.log('wrong input');
          break;
    }
  }
  return arr
}

parse("iiisdoso") // output [ 8, 64 ]
```

## [Best Practice](https://www.codewars.com/kata/reviews/51e0007c1f9378fa810002ac/groups/587b0511a7ef2baafe0001e8)

```js
function parse(data) {
  let res = [];

  data.split('').reduce((cur, s) => {
    if (s === 'i') cur++;
    if (s === 'd') cur--;
    if (s === 's') cur = Math.pow(cur, 2);
    if (s === 'o') res.push(cur);
    
    return cur;
  }, 0);
  
  return res;
}
```

## [Clever](https://www.codewars.com/kata/reviews/51e0007c1f9378fa810002ac/groups/5b72d0996313f07867001d8f)

```js 
const parse = data => {
  const Commands = {
      INCREMENT:  'i',
      DECREMENT:  'd',
      SQUARE:     's',
      OUTPUT:     'o'
  }

  var outputs = [],
      value = 0;
  
  data.split('').forEach(command => {
    switch(command) {
      case Commands.INCREMENT:  value++;                   break;
      case Commands.DECREMENT:  value--;                   break;
      case Commands.SQUARE:     value = Math.pow(value, 2);break;
      case Commands.OUTPUT:     outputs.push(value);       break;
    }
  });
  
  return outputs;
}
```


