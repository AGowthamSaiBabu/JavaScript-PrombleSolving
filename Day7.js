// 1.Basic Callback Execution
//  Write a function called processNumber that accepts a number
// and a callback function. The processNumber function should
//  double the number and pass the result to the callback function.

function processNumber(num, callback){
    let result = num * 2;
    callback(result);
}
function displayResult(value){
    console.log("Result is :",value);
    
}
processNumber(5,displayResult);

// 2.Callback with Array Iteration
//Write a function called forEachElement that takes an array and 
//a callback function. The function should iterate over the array
// and execute the callback function for each element, passing the 
// element as an argument.

function forEachElement(arr,callback){
    for(let i =0;i<arr.length;i++){
        callback(arr[i]);
    }
}
function printElement(value){
    console.log(value);
    
}
let number = [10,20,30,40];
forEachElement(number,printElement);

// 3.Simple Delayed Callback
//  Write a function sayHello that accepts a name and a callback function. 
//  Use setTimeout to wait for 1 second and then call the
//   callback function, passing the message 
// "Hello, [name]!" (replace [name] with the provided name).

function sayHello(name,callback){
    setTimeout(function (){
        let message = "Hello, "+ name + "!";
        callback(message);
    },1000)
}
sayHello("Gowtham", function(result){
    console.log(result);
    
});

// 4.Callback on Condition
//  Write a function checkEven that accepts a number and two callback
//   functions. If the number is even, call the first callback with the 
//   number. If the number is odd, call the second callback with the number.

function checkEven(num,evenCallback,oddCallback){
    if(num %2==0){
        evenCallback(num)
    }else{
        oddCallback(num)
    }
}
function evenNumber(n){
    console.log(n + " is Even");
    
}
function oddNumber(n){
    console.log(n + " is odd");
    
}
checkEven(8,evenNumber,oddNumber)
checkEven(5,evenNumber,oddNumber)

// 5.Sequential Callbacks
//  Write a function performTasks that accepts a number and 
//  two callback functions. First, add 5 to the number using 
//  the first callback, and then multiply the result by 2 using 
//  the second callback. Log the final result to the console.

function performTasks(num ,addCallback, multiplyCallback){
    let result =addCallback(num);
    let finalResult =addCallback(result)

    console.log("Final Result :",finalResult);
    
}