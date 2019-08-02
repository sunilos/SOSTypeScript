/* Example of Switch Case Statement
 
@author SunilOS  
@version 1.0
@Copyright (c) SunilOS  
@Url www.SunilOs.com
 */


let day : number = 4;
switch (day) {
    case 0:
        document.write("It is a Sunday.");
        break;
    case 1:
        document.write("It is a Monday.");
        break;
    case 2:
        document.write("It is a Tuesday.");
        break;
    case 3:
        document.write("It is a Wednesday.");
        break;
    case 4:
        document.write("It is a Thursday.");
        break;
    case 5:
        document.write("It is a Friday.");
        break;
    case 6:
        document.write("It is a Saturday.");
        break;
    default:
        document.write("No such day exists!");
        break;
}
