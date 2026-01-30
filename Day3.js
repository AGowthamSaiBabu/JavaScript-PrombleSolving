// 1: Write a JavaScript script that compares two variables
//  using different comparison operators (==, ===, !=, !==, >, <, >=, <=)
//  and prints the results.

//day3//

let a=10;
let b="10";

console.log("a=",a);
console.log("b=",b);

// Equality operators
console.log("a==b :",a == b);  //true
console.log("a===b :",a === b); //false

// Not equal operators
console.log("a!=b :",a!=b); //fales
console.log("a !== :",a!==b); //true

// Relational operators
console.log("a>b :",a>b); //false
console.log("a<b :",a<b); //false
console.log("a>=b :",a>=b); //true
console.log("a<=b :",a<=b); //true


//2 Write a JavaScript script that uses the 
// ternary operator to determine if a number is even or odd.

let number =7;
let result =(number%2==0)?"Even" :"Odd"

console.log("Number :",number); //7
console.log("Result :",result);//Odd


// 3 Expand the script to include a ternary operation 
// that checks if a user is an adult (18+) or a minor.

let num =8;
let age =17;

let evenOrOdd =(num%2 ==0 )?"Even" : "Odd";

let ageStatus =(age >=18)?"Adult" : "Minor";

console.log("Number",num); //8
console.log("Even or Odd",evenOrOdd); //Even

console.log("Age:",age);//17
console.log("Age Status",ageStatus); //Minor

// 4 Grade Classification: Declare a variable score and 
// set it to a value between 0 and 100.
//  Use nested ternary operators to classify the score into grades:
// A (>= 90), B (>= 75), C (>= 60), D (>= 45), and F (below 45).
// Log the grade.

let score =84;

let grade =
(score >=90) ?"A" :
(score >=75) ?"B" :
(score >=60) ?"C" :
(score >=45) ?"D" :"F";

console.log("Score",score); //84
console.log("Grade",grade); //B

// 5 Temperature Check: Declare a variable temperature and 
//  use nested ternary operators to categorize it as "Hot" (above 30),
// "Warm" (20-30), "Cool" (10-19), and "Cold" (below 10). 
// Log the result.

let temperature =25;

let wether =
(temperature >=30)?"Hot":
(temperature >=20 && temperature<=30) ?"Warm" :
(temperature >=10 && temperature<19) ?"Cool" : "Cold";

console.log("Temperature",temperature); //25
console.log("wether",wether); //Warm


//6 Age Group: Declare a variable age and 
// use the ternary operator to classify the age into "Child"
// (0-12), "Teen" (13-19), "Adult" (20-64), 
// and "Senior" (65 and above). Log the result.

let age1 =45;

let ageGroup =
(age1 >=0 && age1<= 12)?"Child" :
(age1 >=13 && age1 <=19)?"Teen" :
(age1 >=20 && age1 <=64)?"Adult" : "Senior";

console.log("Age :",age1); //45
console.log("Age Group",ageGroup); //Adult



        