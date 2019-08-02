/* Example of Creating Bitwise Operators

@author SunilOS
@version 1.0
@Copyright (c) SunilOS
@Url www.SunilOs.com
*/
var a = 2;
var b = 3;
var result;
document.write("<h4>Bitwise Operator</h4><br>");
result = (a & b);
document.write("(a & b) => ", result + '<br>');
result = (a | b);
document.write("(a | b) => ", result + '<br>');
result = (a ^ b);
document.write("(a ^ b) => ", result + '<br>');
result = (~b);
document.write("(~b) => ", result + '<br>');
result = (a << b);
document.write("(a << b) => ", result + '<br>');
result = (a >> b);
document.write("(a >> b) => ", result + '<br>');
