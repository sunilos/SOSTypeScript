//Example of creating class with concept of Single Inheritance
// 
//@author SunilOS  
//@version 1.0
//@Copyright (c) SunilOS  
//@Url www.SunilOs.com
//


class Person {
   name: string;
   
   constructor(name: string) {
       this.name = name;
   }
}

class Employee extends Person {
   empCode: number;
   
   constructor(empcode: number, name:string) {
       super(name);
       this.empCode = empcode;
   }
   
   displayName():void {
       console.log("Name = " + this.name +  ", Employee Code = " + this.empCode);
   }
}

let emp = new Employee(100, "Ram");
emp.displayName(); 