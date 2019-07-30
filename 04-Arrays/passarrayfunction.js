//Passing arrays in function  
// creata san array
var arr = new Array("Learning", "1000", "Python", "Ram");
//Passing arrays in function  
function display(arr_values) {
    for (var i = 0; i < arr_values.length; i++) {
        console.log(arr[i]);
    }
}
display(arr);
