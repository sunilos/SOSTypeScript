/* Example of  Concatenation or String Operators
 this example show how to concatenate two strings
@author SunilOS  
@version 1.0
@Copyright (c) SunilOS  
@Url www.SunilOs.com
*/

let car  = {name: 'vista', model: 'CLIQ', year: 2018,};
console.log('name' in car);   //  return true

delete car.name;
console.log(car);    //{ model: 'CLIQ', year: 2018 }

let message = "Welcome to " + "Typescript";
console.log(typeof message);  //   return string

let arr = [1, 2, 3];
console.log( arr instanceof Array ); // return true
