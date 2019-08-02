var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
//Create new array from existing array  
var copyArray = arr1.slice();
document.write("Copied one Array to other  -  " + copyArray + '<br>');
//Create new array from existing array with more elements  
var newArray = arr1.concat([7, 8]);
document.write("Create New Array: " + newArray + '<br>');
//Create array by merging two arrays  
var mergedArray = arr1.concat(arr2);
document.write("Merged two Array: " + mergedArray + '<br>');
