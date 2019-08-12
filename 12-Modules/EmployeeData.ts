/* Example of  how to import another file module using import function
 
@author SunilOS  
@version 1.0
@Copyright (c) SunilOS  
@Url www.SunilOs.com
 */

import Employee = require("./Employee");

let a = new Employee("Ram Kapoor");
document.write("<h1 style='color:red;'>Employee Name is : " + a.displayEmployee() + '</h3>')
