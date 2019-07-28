//Example of Private Access Modifier in Class
// 
//@author SunilOS  
//@version 1.0
//@Copyright (c) SunilOS  
//@Url www.SunilOs.com
// 
class Student {  
    private studCode: number;  
    studName: string;  
}  
  
let stud = new Student();  
stud.studCode = 011;  
stud.studName = "Ram Sharma";  
console.log(stud.studCode);