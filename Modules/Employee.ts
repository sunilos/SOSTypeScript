//Example of  how to Creating Module by export keyword
// 
//@author SunilOS  
//@version 1.0
//@Copyright (c) SunilOS  
//@Url www.SunilOs.com
//  
export class Employee {
empName: string;
    constructor(name: string) {
        this.empName = name;}
 displayEmployee() {
        console.log ("Employee Name: " + this.empName );
    } } 
