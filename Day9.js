// 3 Write an arrow function that checks if a number is 
// even and returns true if it is, or false otherwise.

//1 Arrow Function with return
const isEven=(number) =>{
    return number%2==0;
};
console.log(isEven(4));

//2 Simple Arrow Function
const isEven1=(number) =>number%2==0;
console.log(isEven(6));

//3 Using if-else

const isEven2 = (number) =>{
    if(number %2 == 0){
        return true;
    }else{
        return false;
    }
};
console.log(isEven(5));

//4 Store Result in Variable

const isEven3 = (number) => {
    let Result =number % 2==0;
    return Result;
};
console.log(isEven(8));

//5 Ternary Operator

const isEven4 = (number) =>(number%2 == 0 ? true : false);
console.log(isEven4(7));

// 4 Write an arrow function that accepts a number and returns 
// true if the number is greater than 10, or false otherwise. differt way

//1 Arrow Function with return

const greaterThanten = (num) => {
    return num > 10;
};
console.log(greaterThanten(12));

// 2 Simple Arrow Function (Shortest)
const greaterThanten1 = (number) => number>10;

console.log(greaterThanten(15));
console.log(greaterThanten(5));

// 3 Using if-else

const greaterThanten2 = (number) => {
    if(number>10){
        return true;
    }else{
        return false;
    }
};

console.log(greaterThanten(8));

// 4  Using Ternary Operator
const greaterThanten3 = (number) => (number > 10 ? true : false);
console.log(greaterThanten3(20));

// 5 Store Result in Variable

const greaterThanten4 = (number) =>{
    let Result = number >10;
    return Result;
};
console.log( greaterThanten4(11));

//  5 Create an arrow function that takes two strings, 
//  compares their lengths, and returns the longer string. 
//  If both have the same length, return “Equal length.”

//1 Simple Arrow Function

const longerString = (str1,str2) =>{
    if(str1.length > str2.length){
        return str1;
    }else if(str2.length > str2.length){
        return str2
    }else{
        return "Equal Length"
    }
};
console.log(longerString("hello","hi"));

// 2 Using Ternary Operator
const longerString2 = (str1, str2) =>
  str1.length > str2.length
    ? str1
    : str2.length > str1.length
    ? str2
    : "Equal length";

console.log(longerString("cat", "dog"));

// 3 Store Length in Variables
const longerString3 = (str1, str2) => {
  let len1 = str1.length;
  let len2 = str2.length;

  if (len1 > len2) return str1;
  if (len2 > len1) return str2;

  return "Equal length";
};

console.log(longerString("apple", "banana"));

// 4 Using Simple Comparison
const longerString4 = (a, b) => {
  if (a.length === b.length) {
    return "Equal length";
  }
  return a.length > b.length ? a : b;
};

console.log(longerString("car", "train"));

// 5 Short Arrow Function

const longerString5 = (a, b) =>
  a.length === b.length ? "Equal length" : a.length > b.length ? a : b;

console.log(longerString("sun", "moon"));