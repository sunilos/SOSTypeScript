//Example of Creating Union Function with multipe Data Types
//
//@author SunilOS  
//@version 1.0
//@Copyright (c) SunilOS  
//@Url www.SunilOs.com
//
function display(value: (number | string))  
{  
    if(typeof(value) === "number")  
        console.log('Given value is of type number.');  
    else if(typeof(value) === "string")  
        console.log('Given value is of type string.');  
}  
display(123);  
display("Hello Ram");  