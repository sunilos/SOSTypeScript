//Example of creating Default Parameter
// 
//@author SunilOS  
//@version 1.0
//@Copyright (c) SunilOS  
//@Url www.SunilOs.com
// 
function ShowName(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return greeting + ' ' + name + '!';
}
ShowName('Ram'); //OK, returns "Hello Ram!"
ShowName('Ram', 'Hi'); // OK, returns "Hi Ram!".
ShowName('Shyam'); //OK, returns "Hello Shyam!"
console.log(ShowName('Ram'));
console.log(ShowName('Ram', 'Hi'));
console.log(ShowName('Shyam'));
