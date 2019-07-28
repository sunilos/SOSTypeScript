//Example of  Creating Interfaces  Inheritance with extends keyword
// 
//@author SunilOS  
//@version 1.0
//@Copyright (c) SunilOS  
//@Url www.SunilOs.com
//
interface Shape {
   color: string;
}

interface Square extends Shape {
   sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
console.log(square.color);
console.log(square.sideLength);