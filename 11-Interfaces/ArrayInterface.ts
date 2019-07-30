/* Example of  Interface Class
 
@author SunilOS  
@version 1.0
@Copyright (c) SunilOS  
@Url www.SunilOs.com
*/


// Array which return string  
interface nameArray {  
  }  
// use of the interface  
let myNames: nameArray;  
myNames = ['Ram', 'Shyam', 'Balram'];  
  
// Array which return number  
interface ageArray {  
 }  
var myAges: ageArray;  
myAges =[10, 18, 25];  
console.log("My age is: " +myAges[1]);  

var myName: nameArray;  
myName = ['Ram', 'Shyam', 'Balram'];  
console.log("My Name is: " +myName[2]);  