/* Example of  how to Creating Module by export keyword
 
@author SunilOS  
@version 1.0
@Copyright (c) SunilOS  
@Url www.SunilOs.com
 */
 
class Employee {
empName: string;
    constructor(name: string) {
        this.empName = name;
    }
 displayEmployee() {
       return this.empName;
        console.log ("Employee Name: " + this.empName );
    } } 

export = Employee;   