/* Example of  Push Operation
 This Example shows how to delete existing  element from given list
@author SunilOS
@version 1.0
@Copyright (c) SunilOS
@Url www.SunilOs.com
*/
function GetTuple() {
    var empTuple = ["Ram Sharma", 12, "Typescript"];
    document.write("<h4>Show Element List Before Push Operation - " + empTuple + '</h4>');
    console.log(+empTuple);
    empTuple.push("Python"); // append value to the tuple at last
    document.write("<h4>Show Element List After Push Operation - " + empTuple + '</h4>')
    console.log("Items: " + empTuple);
}
