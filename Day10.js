// 1. Create a Promise that prints "Hello World" after 1 second.

let p = new Promise(function(resolve){

    setTimeout(function(){
        resolve("Hello World");
    },1000)
});

p.then(function(result){
    console.log(result);
    
});