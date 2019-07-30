//Example of  how to create Generics
// 
//@author SunilOS  
//@version 1.0
//@Copyright (c) SunilOS  
//@Url www.SunilOs.com
// 
function identity(arg) {
    return arg;
}
//example showing implementation of generics
var output = identity("Hello");
var outputl = identity(23);
console.log(output);
console.log(outputl);
