/*Example of  While Loop
 
@author SunilOS  
@version 1.0
@Copyright (c) SunilOS  
@Url www.SunilOs.com
 */

var num:number = 5;
var factorial:number = 1;
while(num >=1) {
 factorial = factorial * num;
 num--;
}
document.write("The factorial is "+factorial); 

// Example of Do while Loop
var n = 10;
do {
 document.write(n);
 n--;
} while (n >= 1);
