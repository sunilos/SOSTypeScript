/* Example of  how to create Generics
 
@author SunilOS  
@version 1.0
@Copyright (c) SunilOS  
@Url www.SunilOs.com
 */


function identity<T> (arg: T): T {
    return arg; 
    }
    //Example showing implementation of generics
    let output = identity <string>("Hello");
    let outputl = identity <number> (23);
    console.log(output);
    console.log(outputl);