/* Example of Rest Parameter Function
 
@author SunilOS  
@version 1.0
@Copyright (c) SunilOS  
@Url www.SunilOs.com
 */


function printNames(...names: string[]) {
    for (let i = 0; i < names.length; ++i) {
        console.log(names[i] + ",");
    }
}
 
printNames("Ram");
printNames("Ram", "Shyam", "Ambika");
printNames("Balram", "Riya", "Pooja", "Priyanka", "Raj", "Neha");
