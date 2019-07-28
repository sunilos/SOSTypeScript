//Example of Passing Array in Function
// 
//@author SunilOS  
//@version 1.0
//@Copyright (c) SunilOS  
//@Url www.SunilOs.com
// 

//Passing arrays in function  
// creata san array

let arr:string[] = new Array("Ram","Learning", "Python" );   

//Passing arrays in function  
function display(arr_values:string[]) {  
   for(let i = 0;i<arr_values.length;i++) {   
      console.log(arr[i]);  
   }    
}  display(arr);  