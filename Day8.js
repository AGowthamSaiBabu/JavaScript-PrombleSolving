//  1. Write an arrow function that takes two parameters,
//  a and b, and returns their sum.

// Example 1: Arrow function to add two numbers

const sum =(a,b) => {
    return a + b;
}
console.log(sum(5,3));

//2 Shorter Way
const sum1 =(a,b) => a+b;
console.log(5,3);

 //3️ Store result in variable
 const sum2 =(a,b) => {
    let result =a+b;
     return result;  
 };
 console.log(sum(4,6));
 
 //4 Arrow function inside console.log
 console.log(((a,b)=>a+b)(4,6));
 
 //5 Using default parameters
 const sum3 = (a=0,b=0)=>a+b;
 console.log(sum3(4,6));
 

//  2 Create an arrow function that takes a single 
//  parameter name and returns a greeting message: “Hello, {name}!”

// 1 Simple Arrow Function

const greet =(name) => "Hello, " + name + " Welcome to javaScript !";
console.log(greet("Gowtham"));

//2 Arrow Function with return
const greet1 = (name) =>{
    return "Hello, " + name + " Welcome to javaScript !"
};
console.log(greet1("sai"));

// 3 Store Message in Variable
const greet2 =(name) =>{
    let message ="Hello, " + name + "Welcome to javaScript !"
}
console.log(greet2("Babu"));

//4 Using Template String
const greet3 = (name) =>`Hello , ${name}!`;
console.log(greet3("Gowtham"));

//5 Arrow Function Direct Call
console.log(((name)=>"Hello, "+name +"!")("gowtham"));


