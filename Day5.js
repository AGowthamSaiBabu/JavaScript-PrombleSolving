// Task:Task 3: Print Multiples of 5 up to 50
// Scenario: Write JavaScript code that prints all multiples of 5 up to 50.
// Instructions:
// Use a for loop to iterate from 1 to 50.
// Use an if statement to check if a number is a multiple of 5 and print it.

for(let i=1;i<=50;i++){
    if(i%5==0){
        console.log(i);   
    } 
}

// Task 4: Sum of Numbers from 1 to 100
// Scenario: Write JavaScript code that calculates the sum of numbers from 1 to 100.
// Instructions:
// Use a for loop to iterate from 1 to 100.
// Add each number to a sum variable and print the total sum.

let sum = 0;

for(let i=0;i<=100;i++){
    sum = sum+i;
}
console.log("Total sum",sum);

// Task 5: Create a JavaScript program that calculates the
//  factorial of a given number using a for loop.
// Instructions:
// Use a for loop to multiplication the given 
// Take prompt from the user
// hint: take count value as 1;
// 5*4*3*2*1=120

let num = parseInt(prompt("Enter a number:"));
let fact =1;

for(let i = num; i>=1;i--){
    fact=fact*i;
}
console.log("Factorial of "+num + "is: "+fact);

// Task 6: Print Numbers in Reverse Order
// Scenario: Write JavaScript code that prints numbers from 10 to 1 in reverse order.
// Instructions:
// Use a for loop to count down from 10 to 1.
// Display the numbers in the console.

for(let i=10;i>=1;i--){
    console.log(i);
    
}

// Task 7: Print the Alphabet
// Scenario: Write JavaScript code that prints the alphabet from A to Z.
// Instructions:
// Use a for loop to iterate through the ASCII values of the letters A to Z.
// Convert the ASCII values to characters and print them.
// Hint - console.log(String.fromCharCode(i));

for(let i=65;i<=90;i++){
console.log(String.fromCharCode(i));

}