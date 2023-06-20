## [Roman Numerals Encoder](https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/javascript)

## Description

Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.
	

### Example: 

`solution(1000); // should return 'M'`

### Help:

`
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
`

______________________________________________________________________________



## [Best Practice by uksarkar](https://www.codewars.com/users/uksarkar)

``` js

function solution(number){
  	var roman = {M: 1000,CM: 900,D: 500,CD: 400,C: 100,XC: 90,L: 50,XL: 40,X: 10,IX: 9,V: 5,IV: 4,I: 1};
  	var str = '';
  	for (var i of Object.keys(roman)) {
    		var q = Math.floor(number / roman[i]);
    		number -= q * roman[i];
    		str += i.repeat(q);
 		 }
  	return str;
}
console.log(solution(38))  //expected output XXXVIII

```
