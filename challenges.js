/*-----------------------------------------------------------------------------
Challenge: 00-sayHello (example)

Difficulty: Basic

Prompt:

Write a function called sayHello that returns the string "Hello!".

Examples:

sayHello() //=> Hello!
-----------------------------------------------------------------------------*/
// Your solution for 00-sayHello (example) here:

function sayHello() {
  return 'Hello!'
}

/*-----------------------------------------------------------------------------
Challenge: 01-addOne

Difficulty: Basic

Prompt:

- Write a function called addOne that takes a single number as an argument and 
  returns that number plus 1.

Examples:

addOne(1) //=> 2
addOne(-5) //=> -4
-----------------------------------------------------------------------------*/
// Your solution for 01-addOne here:

function addOne(num) {
  return num + 1
}



/*-----------------------------------------------------------------------------
Challenge: 02-addTwoNumbers

Difficulty: Basic

Prompt:

- Write a function called addTwoNumbers that accepts two numeric arguments and
  returns the sum of those two numbers.
- If either argument is not a number, return the value of NaN.

Examples:

addTwoNumbers(5, 10) //=> 15
addTwoNumbers(10, -2) //=> 8
addTwoNumbers(0, 0) //=> 0
addTwoNumbers('Hello', 5) //=> NaN
-----------------------------------------------------------------------------*/
// Your solution for 02-addTwoNumbers here:

function addTwoNumbers(n1, n2) {
  if (isNaN(n1) || isNaN(n2)) return NaN
  return n1 + n2
}

/*-----------------------------------------------------------------------------
Challenge: 03-sumNumbers

Difficulty: Basic

Prompt:

- Write a function called sumNumbers that accepts a single array of numbers and
  returns the sum of the numbers in the array.
- If the array is empty, return 0 (zero).

Examples:

sumNumbers([10]) //=> 10
sumNumbers([5, 10]) //=> 15
sumNumbers([2, 10, -5]) //=> 7
sumNumbers([]) //=> 0
-----------------------------------------------------------------------------*/
// Your solution for 03-sumNumbers here:
function sumNumbers(arr) {
  return arr.reduce((sum, num) => sum + num, 0)
}


/*-----------------------------------------------------------------------------
Challenge: 04-addList

Difficulty: Basic

Prompt:

- Write a function called addList that accepts any quantity of numbers as
  arguments, adds them together, and returns the resulting sum.
- Assume all parameters will be numbers.
- If called with no arguments, return 0 (zero).

Examples:

addList(1) //=> 1
addList(1,50,1.23) //=> 52.23
addList(7,-12) //=> -5
-----------------------------------------------------------------------------*/
// Your solution for 04-addList here:

function addList(...arr) {
  return arr.reduce((sum, num) => sum + num, 0)
}


/*-----------------------------------------------------------------------------
Challenge: 05-computeRemainder

Difficulty: Basic

Prompt:

- Write a function named computeRemainder that accepts two numeric arguments
  and returns the remainder of the division of those two numbers.
- The first argument should be the dividend, and the second argument should be
  the divisor.
- If a 0 is passed in as the second argument, you should return JavaScript's
  special numeric value: Infinity.
- For extra fun, complete this challenge without using the modulus (%) operator.

Examples:

computeRemainder(10,2) //=> 0
computeRemainder(4,0) //=> Infinity
computeRemainder(10.5, 3) //=> 1.5
-----------------------------------------------------------------------------*/
// Your solution for 05-computeRemainder:

function computeRemainder(n1, n2) {
  // Using %
  // return n2 === 0 ? Infinity : n1 % n2


  // Using math logic
  //? I didn't know the name of this method. I learned it long time ago at my middle school

  if (n2 === 0) {
    return Infinity
  } else {
    let remainder = n1
    // Using while loop to get the reminder
    while (remainder >= n2) {
      remainder -= n2
    }
    return remainder
  }
}


/*-----------------------------------------------------------------------------
Challenge: 06-range

Difficulty: basic

Prompt:

- Write a function called range that accepts two integers as arguments and
  returns an array of integers starting with the first argument up to one
  less than the second argument.
- The range function must be called with the first argument less than or equal
  to the second argument; otherwise, return the string "First argument must be
  less than second".

Examples:

range(1,4) //=> [1,2,3]
range(-2, 3) //=> [-2,-1,0,1,2]
range(1,1) //=> []
range(5,2) //=> "First argument must be less than second"
-----------------------------------------------------------------------------*/
// Your solution for 06-range here:

function range(n1, n2) {
  if (n1 > n2) {
    return "First argument must be less than second"
  }
  let res = []
  for (let i = n1; i < n2; i++) {
    res.push(i)
  }
  return res
}



/*-----------------------------------------------------------------------------
Challenge: 07-reverseUpcaseString

Difficulty: Basic

Prompt:

- Write a function called reverseUpcaseString that accepts a single string
  argument, then returns the string with its characters in reverse order and
  converts all characters to uppercase.

Examples:

reverseUpcaseString("SEI Rocks!") //=> "!SKCOR IES"
-----------------------------------------------------------------------------*/
// Your solution for 07-reverseUpcaseString here:

function reverseUpcaseString(str) {
  // I upperCase the string first. Then split to an array. Reverse the array and join the array to get the result
  return str.toUpperCase().split("").reverse().join("")
}



/*-----------------------------------------------------------------------------
Challenge: 08-removeEnds

Difficulty: Basic

Prompt:

- Write a function called removeEnds that accepts a single string argument,
  then returns a string with the first and last characters removed.
- If the length of the string argument is less than 3, return an empty string.

Examples:

removeEnds('SEI Rocks!') //=> "EI Rocks"
removeEnds('a') //=> "" (empty string)
-----------------------------------------------------------------------------*/
// Your solution for 08-removeEnds here:

function removeEnds(str) {
  // return the string from 2nd index to the index before the last one
  return str.length < 3 ? "" : str.slice(1, -1)
}


/*-----------------------------------------------------------------------------
Challenge: 09-charCount

Difficulty: Basic

Prompt:

- Write a function named charCount that accepts a single string argument and
  returns an object that represents the count of each character in the string.
- The returned object should have keys representing the character with its
  value set t the number of times the character appears in the string argument.
- Upper and lower case characters should be counted separately.
- Space characters should be counted too.

Examples:

charCount('hello')
//=> { h: 1, e: 1, l: 2, o: 1 }

charCount('Today is fantastic!')
//=> {
  T: 1,
  o: 1,
  d: 1,
  a: 3,
  y: 1,
  ' ': 2,
  i: 2,
  s: 2,
  f: 1,
  n: 1,
  t: 2,
  c: 1,
  '!': 1
}
-----------------------------------------------------------------------------*/
// Your solution for 09-charCount here:
function charCount(str) {
  // Using split and reduce. But I like using for of loop, it looks simple
  // return str.split("").reduce((prev, char) => {
  //   if (prev[char]) prev[char] = prev[char] + 1
  //   else prev[char] = 1
  //   return prev
  // }, {})

  // Using for loop, but I like to use reduce more than for of loop
  let res = {}
  for (let c of str) {
    if (res[c]) res[c] = res[c] + 1
    else res[c] = 1
  }
  return res

}



/*-----------------------------------------------------------------------------
Challenge: 10-formatWithPadding

Difficulty: Basic

Prompt:

- Write a function called formatWithPadding that accepts three arguments:
  - A numeric argument (an integer) representing the number to format.
  - A string argument (a single character) representing the character used to
    "pad" the returned string to a minimum length.
  - Another numeric argument (an integer) representing the length to pad
    the returned string to.
- The function should return the integer as a string, left padded to the
  length of the 3rd arg using the character provided in the 2nd arg.
- If the length of the integer converted to a string is equal or greater than
  the 3rd argument, no padding is needed - just return the integer as a string.

Examples:

formatWithPadding(123, '0', 5) //=> "00123"
formatWithPadding(42, '*', 10) //=> "********42"
formatWithPadding(1234, '*', 3) //=> "1234"
-----------------------------------------------------------------------------*/
// Your solution for 10-formatWithPadding here:

function formatWithPadding(number, str, numLength) {
  // Convert the number to string, if length of new string > numLength,
  // return itself.
  // Using repeat with numbers of repeat based on  numLength minus numberStr.length, and the rest of return string is numberStr
  let numberStr = number.toString()
  if (numberStr.length > numLength) {
    return numberStr
  }
  return `${str.repeat(numLength - numberStr.length)}${numberStr}`
}


/*-----------------------------------------------------------------------------
Challenge: 11-isPalindrome

Difficulty: Intermediate

Prompt:

- Write a function called isPalindrome that accepts a single string argument,
  then returns true or false depending upon whether or not the string is a
  palindrome.
- A palindrome is a word or phrase that is the same forward or backward.
- Casing and spaces are not included when considering whether or not a string
  is a palindrome.
- If the length of the string is 0 or 1, return true.

Examples:

isPalindrome('SEI Rocks') //=> false
isPalindrome('rotor') //=> true
isPalindrome('A nut for a jar of tuna') //=> true
isPalindrome('') //=> true
-----------------------------------------------------------------------------*/
// Your solution for 11-isPalindrome here:

// function isPalindrome(str) {
//   if (str.length <= 1) return true

//   // Check if string have space (phrase), return true
//   for (let c of str) {
//     if (c === " ") return true
//   }

//   for (let i = 0; i < Math.floor(str.length / 2); i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false
//     }
//   }
//   return true
// }

function isPalindrome(str) {
  if (str.length <= 1) return true

  //formatArr will make the array based on character of str and without empty space
  let orgArr = str.split("")
  let formatArr = []
  for (let c of orgArr) {
    if (c !== " ") formatArr.push(c.toLowerCase())
  }

  // Check Palindrome, i just compare half length string to save time
  for (let i = 0; i < Math.floor(formatArr.length / 2); i++) {
    if (formatArr[i] !== formatArr[formatArr.length - 1 - i]) return false
  }
  return true
}


/*-----------------------------------------------------------------------------
Challenge: 12-hammingDistance

Difficulty: Intermediate

Prompt:

In information theory, the hamming distance refers to the count of the
differences between two strings of equal length. It is used in computer science
for such things as implementing a "fuzzy search" capability.

- Write a function named hammingDistance that accepts two arguments, which are
  both strings of equal length.
- The function should return the count of the symbols (characters, numbers,
  etc.) at the same position within each string that are different.
- If the strings are not of the same length, the function should return NaN.

Examples:

hammingDistance('abc', 'abc') //=> 0
hammingDistance('a1c', 'a2c') //=> 1
hammingDistance('!!!!', '****') //=> 4
hammingDistance('abc', 'ab') //=> NaN
-----------------------------------------------------------------------------*/
// Your solution for 12-hammingDistance here:
function hammingDistance(str1, str2) {
  if (str1.length !== str2.length) return NaN
  let count = 0
  //compare the same index of 2 strings, if it's difference, count increase by 1
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) count++
  }
  return count
}


/*-----------------------------------------------------------------------------
Challenge: 13-mumble

Difficulty: Intermediate

Prompt:

- Write a function called mumble that accepts a single string argument.
- The function should return a string that has each character repeated the
  number of times according to its position within the string arg.
  Additionally, each repeated section of characters should be separated by a
  hyphen (-).
- Examples describe it best..

Examples:

mumble('X') //=> 'X'
mumble('abc') //=> 'a-bb-ccc'
mumble('121') //=> '1-22-111'
mumble('!A 2') //=> '!-AA-   -2222'
-----------------------------------------------------------------------------*/
// Your solution for 13-mumble here:
function mumble(str) {
  // Create an empty arr
  // Loops through the string and repeat the character by number of index + 1
  let res = []
  for (let i = 0; i < str.length; i++) {
    res.push(str[i].repeat(i + 1))
  }
  return res.join('-')
}


/*-----------------------------------------------------------------------------
Challenge: 14-fromPairs

Difficulty: Intermediate

Prompt:

- Write a function named fromPairs that creates an object from an array
  containing nested arrays.
- Each nested array will have two elements representing key/value pairs used
  to create key/value pairs in an object to be returned by the function.
- If a key appears in multiple pairs, the rightmost pair should overwrite the
  previous entry in the object.

Examples:

fromPairs([ ['a', 1], ['b', 2], ['c', 3] ]) //=> { a: 1, b: 2, c: 3 }
fromPairs([ ['name', 'Sam"], ['age', 24], ['name', 'Sally'] ]) //=> { name: "Sally", age: 24 }
-----------------------------------------------------------------------------*/
// Your solution for 14-fromPairs here:
function fromPairs(arr) {
  return arr.reduce((obj, nestedArr) => {
    obj[nestedArr[0]] = nestedArr[1]
    return obj
  }, {})
}


/*-----------------------------------------------------------------------------
Challenge: 15-mergeObjects

Difficulty: Intermediate

Prompt:

- Write a function named mergeObjects that accepts at least two objects as
  arguments, merges the properties of the second through n objects into the
  first object, then finally returns the first object.
- If any objects have the same property key, values from the object(s) later
  in the arguments list should overwrite earlier values.

Examples:

mergeObjects({}, {a: 1})
//=> {a: 1} ( returns a modified version of the object passed into the
              function as the first argument )

mergeObjects({a: 1, b: 2, c: 3}, {d: 4})
//=> {a: 1, b: 2, c: 3, d: 4}

mergeObjects({a: 1, b: 2, c: 3}, {d: 4}, {b: 22, d: 44})
//=> {a: 1, b: 22, c: 3, d: 44}
-----------------------------------------------------------------------------*/
// Your solution for 15-mergeObjects here:


function mergeObjects(...objs) {
  // Using assign of Object
  return Object.assign(...objs)
}


/*-----------------------------------------------------------------------------
Challenge: 16-findHighestPriced

Difficulty: Intermediate

Prompt:

- Write a function named findHighestPriced that accepts a single array of
  objects.
- The objects contained in the array are guaranteed to have a price property
  holding a numeric value.
- The function should return the object in the array with the largest value
  held in the price property.
- If there's a tie between two or more objects, return the first of those
  objects in the array.
- Return the original object, not a copy.
- Do not mutate the array that is passed in.

Examples:

findHighestPriced([
  { sku: 'a1', price: 25 },
  { sku: 'b2', price: 5 },
  { sku: 'c3', price: 50 },
  { sku: 'd4', price: 10 }
])
//=> { sku: 'c3', price: 50 }

findHighestPriced([
  { sku: 'a1', price: 25 },
  { sku: 'b2', price: 50 },
  { sku: 'c3', price: 50 },
  { sku: 'd4', price: 10 }
])
//=> { sku: 'b2', price: 50 }
-----------------------------------------------------------------------------*/
// Your solution for 16-findHighestPriced here:
function findHighestPriced(arr) {
  let sortArr = arr.sort((obj1, obj2) => {
    if (obj1.price < obj2.price) {
      return 1
    } else if (obj1.price >= obj2.price) {
      return -1
    }
  })
  return sortArr[0]
}


/*-----------------------------------------------------------------------------
Challenge: 17-mapArray

Difficulty: Intermediate

Prompt:

The goal of this challenge is to write a function that performs the
functionality of JavaScript's Array.prototype.map method.

- Write a function named mapArray that accepts two arguments: a single array
  and a callback function.
- The mapArray function should return a new array of the same length as the
  array argument.
- The mapArray function should iterate over each element in the array (first
  arg). For each iteration, invoke the callback function (2nd arg), passing to
  it as arguments, the current element, and its index.
- Whatever is returned by the callback function should be included in the new
  array at current iteration's index.

Examples:

mapArray( [1, 2, 3], function(n) {
  return n * 2
} )
//=> [2, 4, 6] (a new array)

mapArray( ['rose', 'tulip', 'daisy'], function(f, i) {
  return `${i + 1} - ${f}`
} )
//=> ["1 - rose", "2 - tulip", "3 - daisy"]
-----------------------------------------------------------------------------*/
// Your solution for 17-mapArray here:

function mapArray(arr, callbackFunction) {
  // using loop with arr.length to make sure the the result array have the same length
  // push the callbackFunction to result with the parameters: the element in arr, and index of arr
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(callbackFunction(arr[i], i, arr))
  }
  return result
}


/*-----------------------------------------------------------------------------
Challenge: 18-reduceArray

Difficulty: Intermediate

Prompt:

The goal of this challenge is to write a function that performs the
functionality of JavaScript's Array.prototype.reduce method.

- Write a function named reduceArray that accepts three arguments:
    1. An array
    2. A callback function
    3. value used as the initial value of the accumulator
- The reduceArray function should return whatever is returned by the callback
  function on the last iteration.
- The reduceArray function should iterate over each element in the array
  (first arg). For each iteration, invoke the callback function (2nd arg),
  passing to it three arguments:
    1. The "accumulator", which is the value returned by the callback during
      the previous iteration
    2. The current element
    3. The index of the current iteration
- On the first iteration, provide the third argument passed to reduceArray as
  the first argument when invoking the callback. For subsequent iterations,
  provide the value returned by the callback during the previous iteration.

Examples:

reduceArray( [1, 2, 3], function(acc, n) {
  return acc + n
}, 0)
//=> 6

reduceArray( [1, 2, 3], function(acc, n, i) {
  return acc + n + i
}, 0)
//=> 9

reduceArray( ['Yes', 'No', 'Yes', 'Maybe'], function(acc, v) {
  acc[v] = acc[v] ? acc[v] + 1 : 1
  return acc
}, {} )
//=> {"Yes": 2, "No": 1, "Maybe": 1}
-----------------------------------------------------------------------------*/
// Your solution for 18-reduceArray here:
function reduceArray(arr, cbFunction, init) {
  /*
  Set the result = initial value, it just works for first time in loop
  Using forEach for array to loops all element in arr
  Invoke the call back function every loops
  The value of result will depend on call back function
  */
  let result = init
  // for (let i = 0; i < arr.length; i++) {
  //   result = cbFunction(result, arr[i], i)
  // }
  arr.forEach((ele, idx) => result = cbFunction(result, ele, idx))
  return result
}



/*-----------------------------------------------------------------------------
Challenge: 19-isPrime

Difficulty: Intermediate

Prompt:

- Write a function named isPrime that returns true when the integer argument
  passed to it is a prime number and false when the argument passed to it is
  not prime.
- A prime number is a whole number (integer) greater than 1 that is evenly
  divisible by only itself.

Examples:

isPrime(2) //=> true
isPrime(3) //=> true
isPrime(4) //=> false
isPrime(29) //=> true
isPrime(200) //=> false
-----------------------------------------------------------------------------*/
// Your solution for 19-isPrime here:

function isPrime(num) {
  // check the number is integer or not
  if (!Number.isInteger(num)) return false
  // if number < 1, return false
  if (num < 2) return false
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false
  }
  return true
}


/*-----------------------------------------------------------------------------
Challenge: 20-intersection

Difficulty: Intermediate

Prompt:

- Write a function named intersection that accepts two arguments, which are
  both arrays. The array arguments may contain any mixture of strings, numbers,
  or booleans - but no reference types (objects).
- The function should return a new array containing all elements in common,
  including repeating element values.
- The ordering of the elements in the returned array is not important.
- If there are no elements in the arrays in common, the intersection function
  should return an empty array.
- The function should not mutate (change) either argument.

Examples:

intersection(['a', 1], []) //=> []
intersection(['a', 1], [true, 'a', 15]) //=> ['a']
intersection([1, 'a', true, 1, 1], [true, 1, 'b', 1]) //=> [1, true, 1]
-----------------------------------------------------------------------------*/
// Your solution for 20-intersection here:
function intersection(arr1, arr2) {
  /*
  Create an empty array is named result
  Using forEach to loop through element in arr1
  Using includes for arr2 to check the common element with arr1
  If the element is common, add it to result and find the index of this element in the arr2 and remove it from the arr2 to avoid repeating
  */
  let result = []
  arr1.forEach(ele => {
    if (arr2.includes(ele)) {
      result.push(ele)
      let idx = arr2.indexOf(ele)
      arr2.splice(idx, 1)
    }
  })
  return result
}

/*---------------------------------------------------------------------------*/
