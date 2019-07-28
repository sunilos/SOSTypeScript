//Example of Public Modifier in Class
// 
//@author SunilOS  
//@version 1.0
//@Copyright (c) SunilOS  
//@Url www.SunilOs.com
// 
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
var stud = new Student();
stud.studName = "Ram Sharma";
console.log(stud.studName);
