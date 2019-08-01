/* Example of Multi-level Inheritance
 
@author SunilOS  
@version 1.0
@Copyright (c) SunilOS  
@Url www.SunilOs.com
*/


class Person { 
   age:number;
   name:string;
    constructor(age: number, name:string) {
      this.age = age;
      this.name = name;
  }
} 
 
class NewPerson extends Person  { 
   empId:string;
    constructor(empId: string,age:number,name:string) {
       super(age,name)
       this.empId = empId;
     
    }   
} 

interface Engineer extends Person, NewPerson {
   name:string;
   age:number;
   empId:string;
}
 
var obj = <Engineer>{name:"Asmita", age:32, empId:"EMP023"};
console.log("Name:  "+obj.name);
console.log("Age:  "+obj.age);
console.log("Emp Id:  "+obj.empId);