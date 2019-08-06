
for (var i = 0; i < 5; i++) {
    document.write("Hello");
}
//Example of For of Loop using  Array to print  index values
var arr = [10, 20, 30, 40];
document.write("For Loop using index values - " );
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var val = arr_1[_i];
    document.write( val + '\n');
    document.write(val + '\n'); // prints values: 10, 20, 30, 40
}
document.write('<br>')
