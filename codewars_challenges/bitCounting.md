# [Bit counting](https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript)

## Instructions 
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

`Example:` The binary representation of `1234` is `10011010010`, so the function should return `5` in this case

### My solution
```js
var countBits = function(n) {
  let arr = []
  let i = 0
  let res = 0;
  while(i < n){
   n = n / 2;
   if(n % 1 != 0){
    arr.push(0);
    n = Math.floor(n)
    res++
   }
   else{
    arr.push(1);
    
   }
  }
  return res;
  
};
```

### [Best practice](https://www.codewars.com/kata/reviews/5265c12a1c3e2482920009e2/groups/55d5dab7c4a3e6d2790001d9)
```js
countBits = n => n.toString(2).split('0').join('').length;
```

### [Clever](https://www.codewars.com/kata/reviews/5265c12a1c3e2482920009e2/groups/5267e3762406723c630007a0)
```js
var countBits = function(n) {
  return n.toString(2).replace(/0/g,'').length;
};
```