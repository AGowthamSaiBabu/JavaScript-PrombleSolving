// 1. Create a Promise that prints "Hello World" after 1 second.

let p = new Promise(function(resolve){

    setTimeout(function(){
        resolve("Hello World");
    },1000)
});

p.then(function(result){
    console.log(result);
    
});

// 2. Create a Promise that checks whether a number is even or odd.

let P = new Promise(function(resolve,reject){
    let number = 2;

    if(number%2==0){
        resolve("Even number")
    }else{
        reject("odd number")
    }
});

Promise
P.then(function(result){
    console.log(result);
    
})
.catch(function(error){
    console.log(error);
    
});

// 3. Create a Promise for student pass or fail

let p2 = new Promise(function(resolve,reject){

    let marks =35;

    if(marks>=35){
        resolve("Student Passed");
    }else{
        reject("Student Failed");
    }
});

p2.then(function(result){
    console.log(result);
    
})
.catch(function(error){
    console.log(error);
    
});