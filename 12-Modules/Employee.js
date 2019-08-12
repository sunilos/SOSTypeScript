/* Example of  how to Creating Module by export keyword
 
@author SunilOS
@version 1.0
@Copyright (c) SunilOS
@Url www.SunilOs.com
 */
define(["require", "exports"], function (require, exports) {
    "use strict";
    var Employee = /** @class */ (function () {
        function Employee(name) {
            this.empName = name;
        }
        Employee.prototype.displayEmployee = function () {
            return this.empName;
            console.log("Employee Name: " + this.empName);
        };
        return Employee;
    }());
    return Employee;
});
