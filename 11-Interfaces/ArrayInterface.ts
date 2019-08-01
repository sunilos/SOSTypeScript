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
let myNames = <nameArray>{};  
myNames = ['Ram', 'Shyam', 'Balram'];  
console.log(myNames[2]);
// Array which return number  
interface ageArray {  
 }  
 let myAge = <ageArray>{};  
 myAge = ['10', '20', '30'];  
 console.log(myAge[2]);