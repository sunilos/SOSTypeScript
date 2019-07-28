//Example of Multi-level Inheritance
// 
//@author SunilOS  
//@version 1.0
//@Copyright (c) SunilOS  
//@Url www.SunilOs.com
//
var IPerson = /** @class */ (function () {
    function IPerson() {
    }
    return IPerson;
}());
var IEmployee = /** @class */ (function () {
    function IEmployee() {
    }
    return IEmployee;
}());
var obj = { name: "Asmita", age: 32, empId: "EMP023" };
console.log("Name:  " + obj.name);
console.log("Age:  " + obj.age);
console.log("Emp Id:  " + obj.empId);
