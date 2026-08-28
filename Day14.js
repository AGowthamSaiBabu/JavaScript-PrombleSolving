// What is a Promise in JavaScript?


// What are the different states of a Promise?


// What is the difference between resolve and reject?


// What does the .then() method do?


// What is the purpose of .catch() in a Promise chain?


// What does .finally() do in Promises?





// 1. What will be the output of this code?
// output:Success

const p =new Promise((reslove,reject)=>{
    reslove("Success");
});
p.then(res =>console.log(res));

// 2.What will be the output of this?
// output:1,2
Promise.resolve(1)
.then(val =>{
    console.log(val);
    return val +1;
})
.then(val =>console.log(val))

// 3.Create a simple Promise that resolves after 2 seconds and prints "Data loaded".
// output:Data loaded
const p1 =new Promise((reslove,reject)=>{
    setTimeout(()=>{
        reslove("Data loaded");
    },2000)
});
p1.then(data =>console.log(data));

// 4.What happens if you forget to handle reject in a Promise?
// output:Something went wrong
// Rejection means a Promise fails or cannot complete successfully.
const p2 =new Promise((reslove,reject)=>{
    reject("Something went wrong")
});
p2.then(dat=>console.log(dat))
.catch(error =>console.log(error));


// 5.What is the output of this code?
console.log("Start");
setTimeout(()=>{
    console.log("Timeout");

},0)
Promise.resolve().then(()=>{
    console.log("Promise");
    
});
console.log("End");

