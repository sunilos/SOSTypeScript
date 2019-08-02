/* Example of Creating Union Array with multiple Data Types

@author SunilOS
@version 1.0
@Copyright (c) SunilOS
@Url www.SunilOs.com
*/
function UnionArray() {
    var arrType;
    var i;
    arrType = [1, 2, 3, 4];
    console.log("<h4>Numeric type array - ");
    document.write("Numeric Array Type is - ");
    for (i = 0; i < arrType.length; i++) {
        document.write( arrType[i] );
     
       
    }
    document.write('<br>');
    arrType = ["Ram", "Shyam", "Balram"];
    document.write("String Array Type is - ");
    for (i = 0; i < arrType.length; i++) {
        document.write(arrType[i]);
      
        
    }
}
