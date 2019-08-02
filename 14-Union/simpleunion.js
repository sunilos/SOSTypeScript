/* Example of Creating  Union with multiple Data Types

@author SunilOS
@version 1.0
@Copyright (c) SunilOS
@Url www.SunilOs.com
*/
function SimpleUnion(value) {
    //let value: number|string|boolean;  
    value = 120;
    document.write("<h4>Numeric value is - " + value + '<br></h4>');
    value = "Welcome to Typescript";
    document.write("<h4>String value is -  " + value + '<br></h4>');
    value = true;
    document.write("<h4>Boolean  value is -  " + value + '</h4>');
}
