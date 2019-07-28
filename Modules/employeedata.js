"use strict";
//Example of  how to import another file module using import function
// 
//@author SunilOS  
//@version 1.0
//@Copyright (c) SunilOS  
//@Url www.SunilOs.com
// 
exports.__esModule = true;
var Employee_1 = require("./Employee");
var empObj = new Employee_1.Employee("Ram Kapoor");
empObj.displayEmployee();
//Output: Employee Name: Ram kapoor
