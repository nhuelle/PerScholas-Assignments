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
function isCharacterAVowel(char) {
  if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
    console.log("Character is a vowel.")
  }
  else if (char == "y") {
    console.log("Character can sometimes be a vowel.")
  }
  else if (char = " ") {
    console.log("Please enter character.")
  }
  else {
    console.log("Character is a consonant.")
  }
};
isCharacterAVowel("a");
/*
4. Define a function  sumArray  and a function  multiplyArray  that sums and multiplies (respectively) all the numbers in an array of numbers. For example,  sumArray([1,2,3,4])  should return 10, and  multiplyArray([1,2,3,4])  should return 24.
*/
sumArray
function sumArray() {
let data = [11, 21, 46, 19, 18];
sum = data.reduce((a, b) => {
  return a + b;
});
return ('The sum is: ', sum);
};
console.log(sumArray());

multiplyArray
function  multiplyArray() {
let data = [11, 21, 46, 19, 18];
product = data.reduce((a, b) => {
  return a * b;
});
return ('The product is: ', product);
};
console.log(multiplyArray());
/*
5.Write a function that returns the number of arguments passed to the function when called.
*/
function countArguments(func) {
  console.log(func.length);
};

function func1(a, b, c) {
};
countArguments(func1);

/*
6. Define a function  reverseString  that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

function reverseString(input) {
    return input.split("").reverse().join("");
}
console.log(reverseString("Reverse Me!"));
/*
7. Write a function  findLongestWord  that takes an array of words and returns the length of the longest one.
*/

function findLongestWord(str_ara) {
  let max = str_ara[0].length;
  str_ara.map(v => max = Math.max(max, v.length));
  result = str_ara.filter(v => v.length == max);
  return result;
}

console.log(findLongestWord(['super', 'cali', 'fragilistic', 'expialidocious']));
/*
8. Write a function  filterLongWords  that takes an array of words and a number  i  and returns the array of words that are longer than i characters long.
*/

function filterLongWords(arr, len){
	return arr.filter((word) => word.length > len);
}

console.log(filterLongWords(['super', 'cali', 'fragilistic', 'expialidocious'],4));

//Replaced questions 4 through 8 with my own code, resubmitted assignment.
