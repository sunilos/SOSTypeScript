/* Example of  Creatinng Simple Interface
 
@author SunilOS  
@version 1.0
@Copyright (c) SunilOS  
@Url www.SunilOs.com
*/

interface Student {  
    name: String;  
    language: String;  
}  
let studentdata  = (type: Student): void => {  
  console.log(type.name +  ' ' + 'Learn  ' + type.language + ' language.');  
};  

let check  = {name: 'Ram', language: 'Python'}
studentdata(check)