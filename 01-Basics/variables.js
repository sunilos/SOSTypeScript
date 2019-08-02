/* Example of Creating Simple variable using let , var and const keyword

@author SunilOS
@version 1.0
@Copyright (c) SunilOS
@Url www.SunilOs.com
*/
//Define variable using var keyword
function a() {
    var msg = " My Name is Ram";
    return msg;
}
a();
document.write('<br>');
document.write( "Variable value using var keyword  - " + a() + '<br>');
//Define variable using let keyword
var employeeName = "My Name is Shyam";
document.write("variable value using let keyword - " + employeeName + '<br>');
//Define variable using const keyword
function constTest() {
    var VAR = 10;
    document.write("variable value using const keyword -  " + VAR + '<br>');
}
constTest();
