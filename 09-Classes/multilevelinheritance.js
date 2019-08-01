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
    return Person;
}());
var NewPerson = /** @class */ (function (_super) {
    __extends(NewPerson, _super);
    function NewPerson(empId, age, name) {
        var _this = _super.call(this, age, name) || this;
        _this.empId = empId;
        return _this;
    }
    return NewPerson;
}(Person));
var obj = { name: "Asmita", age: 32, empId: "EMP023" };
console.log("Name:  " + obj.name);
console.log("Age:  " + obj.age);
console.log("Emp Id:  " + obj.empId);
