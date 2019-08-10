/* Example of Creating  Union with multiple Data Types

@author SunilOS  
@version 1.0
@Copyright (c) SunilOS  
@Url www.SunilOs.com
*/

function SimpleUnion(value: number|string|boolean){
    //let value: number|string|boolean;  
    //value = 120;  
    console.log("Numeric value of the value: "+value);  
    value = "Welcome to Typescript";  
    console.log("String value of the value: "+value);  
    value =  true;
    console.log("String value of the value: "+value);  

}
