/* Example of Creating  Class Constructor
 
@author SunilOS  
@version 1.0
@Copyright (c) SunilOS  
@Url www.SunilOs.com
*/


//creating a Student class.  
class Student {   
    //defining fields    
    name:string;  
     
    //defining constructor   
   constructor(name:string) {   
       this.name = name;  
   }    
      //creating method or function   
   display():void {     
   }   
}     
//Creating an object or instance     
let stu = new Student("Ram kapoor")  
  
//access the field   
console.log("Student Name: " +stu.name)  
//access the method or function  
stu.display()  


