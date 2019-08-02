/* Example of Passing Array in Function
 
@author SunilOS
@version 1.0
@Copyright (c) SunilOS
@Url www.SunilOs.com
 */
var arr = new Array("Ram", "Learning", "Python");
//Passing arrays in function  
document.write("Passing Array Inside function values are - ");
function display(arr_values) {
    for (var i = 0; i < arr_values.length; i++) {
        document.write(arr[i] + ' ');
    }
}
display(arr);
