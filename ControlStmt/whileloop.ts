//Example of  While Loop
// 
//@author SunilOS  
//@version 1.0
//@Copyright (c) SunilOS  
//@Url www.SunilOs.com
// 
var num:number = 5;
var factorial:number = 1;
while(num >=1) {
 factorial = factorial * num;
 num--;
}
console.log("The factorial is "+factorial); 

//do while loop example

var n = 10;
do {
 console.log(n);
 n--;
} while (n >= 1);
