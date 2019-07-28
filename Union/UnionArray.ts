//Example of Creating Union Array with multiple Data Types
//
//@author SunilOS  
//@version 1.0
//@Copyright (c) SunilOS  
//@Url www.SunilOs.com
//
let arrType:number[]|string[];   
let i;   
arrType = [1,2,3,4];  
console.log("Numeric type array:")    
  
for(i = 0;i<arrType.length;i++){  
   console.log(arrType[i]);  
}  
arrType = ["Ram","Shyam","Balram"];  
console.log("String type array:")    
  
for(i = 0;i<arrType.length;i++){   
   console.log(arrType[i]);  
}  