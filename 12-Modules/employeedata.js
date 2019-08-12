/* Example of  how to import another file module using import function
 
@author SunilOS
@version 1.0
@Copyright (c) SunilOS
@Url www.SunilOs.com
 */
define(["require", "exports", "./Employee"], function (require, exports, Employee) {
    "use strict";
    exports.__esModule = true;
    var a = new Employee("Ram Kapoor");
    document.write("<h1 style='color:red;'>Employee Name is : " + a.displayEmployee() + '</h3>');
});
