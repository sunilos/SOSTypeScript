"use strict";
exports.__esModule = true;
//Example of  how to Creating Module by export keyword
// 
//@author SunilOS  
//@version 1.0
//@Copyright (c) SunilOS  
//@Url www.SunilOs.com
//  
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.empName = name;
    }
    Employee.prototype.displayEmployee = function () {
        console.log("Employee Name: " + this.empName);
    };
    return Employee;
}());
exports.Employee = Employee;
