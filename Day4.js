// 1. Scenario: Online Library Membership
// ---------------------------------------
// Context: An online library offers different levels of membership. 
// Depending on the type of membership, users have access to different resources:

// Basic Membership: Access to only free books.

// Standard Membership: Access to free books and discounted paid books.

// Premium Membership: Access to all books, including exclusive content.

// Question: Imagine you have a variable that stores a user’s membership type. 
// Using conditional statements, determine what resources the user can access and 
// display a message indicating their access level. Consider how you would handle
//  a situation where the membership type is invalid.

//day 4//

// let membershipType ="Standard";

// if(membershipType ==="Basic"){
//     console.log("Access to only free books! "); 
// }else if(membershipType ==="Standard"){
//     console.log("Access to free books and discounted paid books");   
// }else if(membershipType ==="premium"){
//     console.log("Access to all books, including exclusive content.");
    
// }else{
//     console.log("Invalid membership type. Please choose Basic, Standard, or Premium.");
    
// }

// 2. Scenario: E-Commerce Discount Application
// ---------------------------------------------
// Context: An e-commerce platform applies discounts based on the user's 
// membership status and the total purchase amount:

// Regular Customers: No discount for purchases under $100. A 5% discount 
// for purchases between $100 and $500. A 10% discount for purchases over $500.

// VIP Customers: A 10% discount for purchases under $100. A 15% discount 
// for purchases between $100 and $500. A 20% discount for purchases over $500.

// Question: Suppose you have variables that represent a user’s membership 
// status and purchase amount. Use conditional statements to determine the
//  final price after applying the appropriate discount. Think about how to 
//  handle invalid inputs, such as negative purchase amounts or unrecognized membership statuses.

let membershipStatus = "VIP";
let purchaseAmount =300;

let discount =0;

if(purchaseAmount<=0){
    console.log("Invalid purchase amount");
    
}else if(membershipStatus !=="Regular" && membershipStatus !=="VIP"){
    console.log("Invalid membership amount");
    
}
else {
    if(membershipStatus ==="Regular"){
        if(purchaseAmount < 100){
            discount =0;
        }else if(purchaseAmount<=500){
            discount =0.05;
        }else{
            discount =0.10;
        }
    }

    if(membershipStatus ==="VIP"){
        if(purchaseAmount < 100){
            discount = 0.10;
        }else if(purchaseAmount <= 500){
            discount = 0.15;
        }else{
            discount = 0.20;
        }
    }
    let finalPrice = purchaseAmount -(purchaseAmount*discount);
    console.log("final Price:$ "+finalPrice);
    
}

// 3. Scenario: Academic Scholarship Eligibility
// ----------------------------------------------
// Context: A university offers scholarships to students based on their GPA and extracurricular involvement:

// Merit-Based Scholarship: Requires a GPA of 3.5 or higher.

// Leadership Scholarship: Requires active participation in at least two extracurricular activities and a GPA of 3.0 or higher.

// Community Service Scholarship: Requires 100 or more hours of community service and a GPA of 2.5 or higher.

// Question: Given variables that store a student's GPA, number of extracurricular activities, and community service
//  hours, use conditional statements to determine which scholarships the student is eligible for. Consider scenarios 
//  where a student qualifies for multiple scholarships or none.

let GPA = 3.6;
let activities =2;
let serviceHoure =120;

let eligible =false

if(GPA >=3.5){
    console.log("Eligible for merit-Based Scholarshipe");
    eligible = true;
    
}

if(GPA >=3.0 && activities>=2){
    console.log("Eligible for leadershipe Scholarshipe");
    eligible =true;
}

if(GPA >=2.5 && serviceHoure >=100){
    console.log("Eligible for community Service Scholarshipe");
    eligible =true;
}
if(!eligible){
    console.log("Not eligible for any scholarshipe");
    
}

// 4. Scenario: Movie Ticket Pricing
// ----------------------------------
// Context: A movie theater charges different prices based on the day of the week and the customer's age:

// Weekdays: Standard price of $12. Seniors (65 and older) and children (under 12) receive a 50% discount.

// Weekends: Standard price of $15. Seniors and children receive a 30% discount.

// Question: Assume you have variables for the day of the week and the customer’s age. Use conditional statements to determine the correct ticket price. Consider how to handle situations where the day or age is invalid.

let day = "Weekend";
let age =70;

let price =0;

if(age <=0){
    console.log("Invalid age");
    
}else if(day !=="Weekday" && day !=="Weekend"){
    console.log("Invalid day");
    
}
else {
    if(day === "Weekday"){
        price =12;
        if(age < 12 || age>=65){
            price =price*0.5;
        }
    }

    if(day ==="Weekday"){
        price =15;
        if(age < 12 || age >=65){
             price =price*0.7;  
      }
    }
    console.log("Ticket price: $"+price);
    
}

// 5. Scenario: Event Registration Validation
// -------------------------------------------
// Context: An event registration system needs to validate user inputs before confirming their registration:

// The user must be 18 years or older to register.

// The event allows a maximum of 100 participants. If the event is full, no more registrations are accepted.

// The user must provide a valid email address.

// Question: You have variables for the user’s age, the number of participants already registered, and their 
// email address. Use conditional statements to validate whether the user can register for the event. Think about
//  how to handle cases where some or all conditions are not met.

let age1 =22;
let registerCount =85;
let email ="user@gmail.com";

let canRegister = true;

if(age < 18){
    console.log("Registration failed: Age must be 18 or older");
    canRegister = false;
    
}

if(registerCount>=100){
    console.log("Registration failed: Event is full");
    canRegister =false;
}

if(!email.includes("@") || !email.includes(".")){
    console.log("Registration failed: Invalid email address");
    canRegister = false;
}
if(canRegister){
    console.log("Register successfil");
    
}