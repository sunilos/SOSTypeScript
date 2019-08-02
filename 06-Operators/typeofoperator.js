//Example of  Concatenation or String Operators
// this example show how to concatenate two strings
//@author SunilOS  
//@version 1.0
//@Copyright (c) SunilOS  
//@Url www.SunilOs.com
//
var car = { name: 'vista', model: 'CLIQ', year: 2018 };
document.write('name' in car); //  return true
delete car.name;
document.write(car); //{ model: 'CLIQ', year: 2018 }
var message = "Welcome to " + "Typescript";
document.write(typeof message); //   return string
var arr = [1, 2, 3];
document.write(arr instanceof Array); // return true
