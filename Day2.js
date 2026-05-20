// Draw Global Execution Context for Below Codes and Explain Line by line.
//1

console.log(a); //undefined
 var a = 10;
 console.log(a); //10
 a = 20;
 console.log(a); //20

 //2
 console.log(b); //undefined
 var b = 5;
 var b = 15;
 console.log(b); //15
 b = b + 5;
 console.log(b); //20
 
 //3
 console.log(c); //undefined
 c = 30;
 var c;
 console.log(c); //30
 c = c * 2;
 console.log(c); //60

//4
var d;
 console.log(d); //undefined
 d = 50;
 console.log(d); //50
 d = d + 10;
 console.log(d); //60
 var d = 100;
 console.log(d); //100

 //5
 var e = 1;
 console.log(e); //1
 e = e + 1;
 console.log(e); //2
 var e = 10;
 console.log(e); //10
 e = e * 2;
 console.log(e); 20