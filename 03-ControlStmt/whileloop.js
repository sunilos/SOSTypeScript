/*Example of  While Loop
 
@author SunilOS
@version 1.0
@Copyright (c) SunilOS
@Url www.SunilOs.com
 */
var num = 5;
var factorial = 1;
while (num >= 1) {
    factorial = factorial * num;
    num--;
}
document.write("<h4>The factorial of Given Number  is " + factorial + '</h4>');
console.log("The factorial is " + factorial);
// Example of Do while Loop
var n = 10;
do {
    console.log(n);
    n--;
} while (n >= 1);
