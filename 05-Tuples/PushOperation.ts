/* Example of  Push Operation 
 This Example shows how to delete existing  element from given list
@author SunilOS  
@version 1.0
@Copyright (c) SunilOS  
@Url www.SunilOs.com
*/

function GetTuple(){
let empTuple = ["Ram Sharma", 12, "Typescript"];  

document.write(empTuple);  

empTuple.push("Python");   // append value to the tuple at last

document.write("After Push Items: "+empTuple);  
}
