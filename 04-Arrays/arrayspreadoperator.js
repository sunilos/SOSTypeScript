var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
//Create new array from existing array  
var copyArray = arr1.slice();
console.log("CopiedArray: " + copyArray);
//Create new array from existing array with more elements  
var newArray = arr1.concat([7, 8]);
console.log("NewArray: " + newArray);
//Create array by merging two arrays  
var mergedArray = arr1.concat(arr2);
console.log("MergedArray: " + mergedArray);
