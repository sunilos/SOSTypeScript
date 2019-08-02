/* Example of Rest Parameter Function
 
@author SunilOS
@version 1.0
@Copyright (c) SunilOS
@Url www.SunilOs.com
 */
function printNames() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    for (var i = 0; i < names.length; ++i) {
        console.log(names[i] + ",");
        return names[i];
    }
}
var result = printNames("Ram", "Shyam", "Ritu", "Sheetal");
console.log(result);
printNames("Ram");
printNames("Ram", "Shyam", "Ambika");
printNames("Balram", "Riya", "Pooja", "Priyanka", "Raj", "Neha");
