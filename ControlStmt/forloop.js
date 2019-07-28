//Example of Simple For Loop
// 
//@author SunilOS  
//@version 1.0
//@Copyright (c) SunilOS  
//@Url www.SunilOs.com
// 
for (var i = 0; i < 5; i++) {
    console.log("Hello");
}
var arr = [10, 20, 30, 40];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var val = arr_1[_i];
    console.log(val); // prints values: 10, 20, 30, 40
}
//Next is to print index value of arrays
for (var index in arr) {
    console.log(index); // prints indexes: 0, 1, 2, 3
}
console.log(index); //OK, prints 3 
// While Loop
var num = 1;
while (num <= 10) {
    console.log(num);
    num++;
}
