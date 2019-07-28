//Example of creating class with concept of Single Inheritance
// 
//@author SunilOS  
//@version 1.0
//@Copyright (c) SunilOS  
//@Url www.SunilOs.com
//
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*class Shape {
   Area:number
   constructor(area:number) {
      this.Area = area
   }
}
class Circle extends Shape {
   display():void {
      console.log("Area of the circle: "+this.Area)
   }
}
var obj = new Circle(320);
obj.display() */
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(empcode, name) {
        var _this = _super.call(this, name) || this;
        _this.empCode = empcode;
        return _this;
    }
    Employee.prototype.displayName = function () {
        console.log("Name = " + this.name + ", Employee Code = " + this.empCode);
    };
    return Employee;
}(Person));
var emp = new Employee(100, "Ram");
emp.displayName();
