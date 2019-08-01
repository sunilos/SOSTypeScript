/* Example of Multi-level Inheritance
 
@author SunilOS  
@version 1.0
@Copyright (c) SunilOS  
@Url www.SunilOs.com
*/


class Person { 
   age:number;
   name:string;
} 
 
class Employee { 
   empId:string; 
} 
 
interface Engineer extends Person, Employee {}
 
var obj:Engineer = {name:"Asmita", age:32, empId:"EMP023"}; 
console.log("Name:  "+obj.name);
console.log("Age:  "+obj.age);
console.log("Emp Id:  "+obj.empId);
