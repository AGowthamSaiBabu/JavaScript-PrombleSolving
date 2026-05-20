// 1.How would you define a function that takes two numbers 
// as parameters and returns their sum?

function addNumber(a,b){
    return a + b;
}
let result = addNumber(10,5);
console.log("Sum =",result);

// 2. If you define a function that accepts a string as a parameter, 
// how would you modify it to print the string in uppercase?

function printUpperCase(Text){
    console.log(Text.toUpperCase());
    
}
printUpperCase("hello gowtham");

// 3. In JavaScript, what happens if you pass an undefined value 
// as an argument to a function that expects a parameter?

function ShowName(name){
    console.log(name);
    
}
ShowName(undefined);

// 4. Suppose you have a function that takes an array as a parameter.
//  How would you check inside the function if the array is empty?

function checkArray(arr){
    if(arr.length==0){
        console.log("Array is Empty");
        
    }else{
        console.log("Array is not Empty");
        
    }
}
checkArray([])
checkArray([1,2,3])

// 5. write a function that takes two numbers as parameters
//  and returns their difference.
function numbers(a,b){
    return a-b;
}
let sum = numbers(10,3)
console.log("Different="+sum);

// 6. Define a function that accepts a name and 
// age as parameters, and returns a string with a 
// greeting like "Hello, [name]! You are [age] years old."

function Student(name,age){
    return "Hello, "+name+ " !You are " + age +"Year old";
}
console.log(Student("Gowtham",23));

// 7. Write a function that takes a number as a parameter and 
// returns true if the number is a even number, otherwise false.

function isEven(number){
    return number % 2==0;
}
console.log(isEven(4));
console.log(isEven(1));




