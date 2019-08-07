/* Example of  how to create Function
 
@author SunilOS  
@version 1.0
@Copyright (c) SunilOS  
@Url www.SunilOs.com
*/


function sum( a, b) {
    return parseInt(a) + parseInt(b);
}

function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}  

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}  
console.log(sum(5,3))
console.log(max(8,9))
console.log(min(15,30))
