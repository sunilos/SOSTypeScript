//Example of Creating  Class Constructor
// 
//@author SunilOS  
//@version 1.0
//@Copyright (c) SunilOS  
//@Url www.SunilOs.com
//
//creating a Student class.  
var Student = /** @class */ (function () {
    //defining constructor   
    function Student(name) {
        this.name = name;
    }
    //creating method or function   
    Student.prototype.display = function () {
    };
    return Student;
}());
//Creating an object or instance     
var stu = new Student("Ram kapoor");
//access the field   
console.log("Student Name: " + stu.name);
//access the method or function  
stu.display();
