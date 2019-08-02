/* Example of Array Spread Operator
This example show how to copy one array to other, create new array by adding elements, and merged two arrays
@author SunilOS  
@version 1.0
@Copyright (c) SunilOS  
@Url www.SunilOs.com
*/


let arr1 = [ 1, 2, 3];  
let arr2 = [ 4, 5, 6];  
//Create new array from existing array  
let copyArray = [...arr1];     
document.write("Copied one Array to other  -  " +copyArray + '<br>');  
//Create new array from existing array with more elements  
let newArray = [...arr1, 7, 8];  
document.write("Create New Array: " +newArray + '<br>');  
//Create array by merging two arrays  
let mergedArray = [...arr1, ...arr2];  
document.write("Merged two Array: " +mergedArray + '<br>');  