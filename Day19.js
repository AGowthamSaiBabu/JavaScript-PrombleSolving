// 1)Add elements to an array and iterate using for loop and for in loop and for of loop
// Create an array of your favorite movies and iterate an array to the console.

let movie =["OG","Kalki","pushpa","salar"];

console.log("Using for loop:");
for(let i=0;i<movie.length;i++){
  console.log(movie[i]);
}

console.log("Using for...in loop");
for(let index in movie){
  console.log(movie[index]);
  
}

console.log("Using for...of loop");
for(let value of movie){
  console.log(value);
  
}

// 2)Remove elements from an array
// Remove the first and last elements from the array.
let arr =[10,20,30,40,50];

arr.shift();
arr.pop();

console.log(arr);

// 3)Reverse an array using for loop
// hints
// use push method
let num =[10,20,30,40];
let Reverse =[]
for(let i=num.length-1;i>=0;i--){
  Reverse.push(num[i])
}
console.log(Reverse);

// 4) find the even and odd numbers in an array [12,3,5,6,22,56,29]
// and print the evensum and oddsum

let arr1 =[12,3,5,6,22,56,29];
let EvenSum=0;
let OddSum=0;

for(let i=0;i<arr1.length;i++){
  if( arr1[i]%2==0){
     console.log(arr[i]);
     EvenSum =EvenSum+arr1[i];
  }
}

for(let i=0;i<arr.length;i++){
  if(arr1[i]%2==1){
    console.log(arr1[i]);
    OddSum =OddSum+arr1[i];
  }
}

console.log(EvenSum);
console.log(OddSum);

// 5) Take a heterogenious array and separate each data type into new array
// hints : use loop, typeof and push method
// inp: let arr = ["apple", "banana", "mango", "banana", 3, 4, 5, 6, true, {name: "object"}];
// out :
// num=[3,4,5,6]
// str=["apple","banana","mango","banana"]
// bool=[true]
// obj=[{name: "object"}]

let arr2 =["apple,","Banana","mango",3,4,5,6,true,{name:"object"}]
let numbers =[];
let string =[];
let boolen =[];
let object =[];

for(let i=0;i<arr.length;i++){
  if(typeof arr2[i] ==="number"){
    numbers.push(arr2[i]);
  }else if(typeof arr2[i] ==="String"){
    string.push(arr2[i]);
  }else if(typeof arr2[i] ==="boolean"){
    boolen.push(arr2[i]);
  }else if(typeof arr2[i]  ==="object"){
    object.push(arr2[i]);
  }
}

// Task 1: Using concat
// Objective: Merge two or more arrays.
// Task: Create two arrays, one with your favorite sports and one with your favorite hobbies. Use the concat method to merge them into a single array.
// Expected Output: Display the merged array.

let sports =["cricket","tennis","Football"];

let hobbies =["muscie","cooking","Coding"];

let result =sports.concat(hobbies);

console.log(result);

// Task 2: Using splice
// Objective: Modify an array by adding, removing, or replacing elements.
// Task: Create an array of numbers from 1 to 10. Use the splice method to remove the 
// numbers 4, 5, and 6, and replace them with the numbers 40, 50, and 60.
// Expected Output: Display the array before and after the splice operation.


let arr3 =[1,2,3,4,5,6,7,8,9,10];
console.log("Before :",arr3);

arr3.splice(3,3,40,50,60);

console.log("Affter :",arr3);

// Task 3: Using slice
// Objective: Extract a portion of an array without modifying the original array.
// Task: Create an array of the days of the week. Use the slice method to create a new array that contains only the weekdays.
// Expected Output: Display the original array and the new array.

let days =[
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "sun"
];

let weekdays =days.slice(0, 5);

console.log("Origin :",days);
console.log("Weekdays :",weekdays);






