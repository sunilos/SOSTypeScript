//Example of  Interfaces with Class
// 
//@author SunilOS  
//@version 1.0
//@Copyright (c) SunilOS  
//@Url www.SunilOs.com
//
interface Person {  
    firstName: string;  
    lastName: string;  
    FullName();  
  
}  
// implementing the interface  
class Employee implements Person {  
    firstName: string;  
    lastName: string;  
    age:number;  
    FullName() {  
        return this.firstName + ' ' + this.lastName;  
    }   
    constructor(firstN: string, lastN: string) {  
        this.firstName = firstN;  
        this.lastName = lastN;  
    }  
}  
// using the class that implements interface  
let myEmployee = new Employee('Ram', 'Mishra');  
let fullName = myEmployee.FullName();  

console.log("Name of Person: " +fullName);  