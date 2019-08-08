//Example of Private Modifier in Class
// 
//@author SunilOS  
//@version 1.0
//@Copyright (c) SunilOS  
//@Url www.SunilOs.com
// 
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.setStudCode = function (studcode) {
        this.studCode = studcode;
    };
    Student.prototype.getStudCode = function () {
        return this.studCode;
    };
    return Student;
}());
var stud = new Student();
stud.setStudCode(101);
console.log("Student Code is : " + stud.getStudCode());
