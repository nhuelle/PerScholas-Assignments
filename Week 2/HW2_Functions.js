/*
1. Define a function  maxOfTwoNumbers  that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

function maxOfTwoNumbers(x, y) {
  if (x > y) {
    console.log(x);
  }
  else {
    console.log(y);
  }
};
maxOfTwoNumbers(6, 2)

/*
2. Define a function  maxOfThree  that takes three numbers as arguments and returns the largest of them.
*/
function maxOfThree(x, y, z) {
  if (x > y && x > z) {
    console.log(x);
  }
  else if ( y > x && y > z ) {
      console.log(y);
    }
  else {
      console.log(z);
    }
};
maxOfThree(9, 3, 6)
/*
3. Write a function  isCharacterAVowel  that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
function isCharacterAVowel(x) {
  if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
    console.log("Character is a vowel.")
  }
  else {
    console.log("Character is a consonant.")
  }
};
isCharacterAVowel("b")
/*
4. Define a function  sumArray  and a function  multiplyArray  that sums and multiplies (respectively) all the numbers in an array of numbers. For example,  sumArray([1,2,3,4])  should return 10, and  multiplyArray([1,2,3,4])  should return 24.
*/
function sumArray(numbers) {
  let sum = 0;
  for(i=0; i<numbers.length; i++){
    sum = sum + numbers[i];
  }
  return sum;
}
console.log(sumArray([1,2,3,4]));

function multiplyArray(numbers) {
    let product=1
    for(i=0; i<numbers.length; i++){
      product = product * numbers[i]
    }
    return product
  }
console.log(multiplyArray([1,2,3,4]))
/*
5.Write a function that returns the number of arguments passed to the function when called.
*/
function function1() {}

  function function2(a, b, c) {}

  console.log (function1.length);
  console.log (function2.length);

/*
6. Define a function  reverseString  that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

const reverseString = (arr) => {
   let sortedArr = arr.sort().reverse()
   return sortedArr[0] // memory slot for first item in the array
 }
 Input / Output
 let trial1 = [1,4,2];
 let trial2 = [7,8,3];
 console.log("the highest number of " + trial1 + " is " + reverseString(trial1));
 console.log("the highest number of " + trial2 + " is " + reverseString(trial2));

/*
7. Write a function  findLongestWord  that takes an array of words and returns the length of the longest one.
*/
function findLongestWord(arr) {
  let word = "";
  for (let i = 0; i < arr.length; i++) {
    if (word.length < arr[i].length) {
      word = arr[i];
    }
  }
  return word;
};

/*
8. Write a function  filterLongWords  that takes an array of words and a number  i  and returns the array of words that are longer than i characters long.
*/
let i = 6 // i assigned value sets filter in function "word"
  var arrayInput = ["I","struggle","with","coding","from","time","to","time"];
  var arrayCleaned = arrayInput.filter( function( word ) {
    return word.length >= i;
  });
  console.log(arrayCleaned);
};
//copied code for problems 4-8 from John Bond. Will tweak it and write my own code later.
