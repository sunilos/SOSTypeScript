/* Example of Private Access Modifier in Class
 
@author SunilOS  
@version 1.0
@Copyright (c) SunilOS  
@Url www.SunilOs.com
*/
 

 
class Student {  
    private studCode: number;  
    
    public setStudCode(studcode){
    this.studCode=studcode
    }

    public getStudCode(){
  	return  this.studCode
    }
}  
  
let stud = new Student();
stud.setStudCode(101)
console.log("Student Code is : "+stud.getStudCode())
