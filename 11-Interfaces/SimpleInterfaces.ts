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
let stu = <Student>{};
stu.name = "Anjali";
stu.language = "Learn Python";
console.log(stu.name);
console.log(stu.language);
