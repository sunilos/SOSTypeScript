/* Example of  Pop Operation
This Example shows how to add element in existing list
@author SunilOS
@version 1.0
@Copyright (c) SunilOS
@Url www.SunilOs.com
*/
function GetElement(no) {
    var empTuple = ["Ram Sharma", 25, "Typescript", "Python"];
    console.log("Items: " + empTuple);
    document.write("<h4>Element List Before Pop Operation -  " + empTuple + '</h4>');

    console.log("Length of Tuple Items before pop: " + empTuple.length); // returns the tuple size  
     empTuple.pop(); // removed value to the tuple   
    document.write("<h4>Show Empty List After Pop Operation - " + empTuple.length + '</h4>');
    console.log(empTuple.length);
    console.log("Items: " + empTuple);
    //Clear  or empty  the field of tuples
}
var empTuple1 = ["Shyam Sharma", 25, "Typscipt"];
empTuple1 = [];
console.log(empTuple1);
