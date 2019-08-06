/* Example of  Pop Operation
This Example shows how to add element in existing list
@author SunilOS
@version 1.0
@Copyright (c) SunilOS
@Url www.SunilOs.com
*/
function GetElement(empTuple)
{
document.write("Items: "+empTuple);  
document.write("Tuple pop Items  : "+ empTuple.pop()); // removed value to the tuple   
document.write("Length of Tuple Items before pop: "+empTuple.length);   // returns the tuple size  
document.write("Tuple pop Items  : "+ empTuple.pop()); // removed value to the tuple   
document.write("Length of Tuple Items after pop: "+empTuple.length); 
document.write("Items: "+empTuple);  

//Clear  or empty  the field of tuples

}
var empTuple = ["Ram Sharma", 25, "Typescript", "Python"];  
GetElement(empTuple)
