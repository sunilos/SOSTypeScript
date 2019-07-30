/* Example of creating Optional Parameter
 
@author SunilOS  
@version 1.0
@Copyright (c) SunilOS  
@Url www.SunilOs.com
 */


function ShowName(greeting: string, name?: string ) : string {
    return greeting + ' ' + name + '!';
}

ShowName('Hello','Ram');//OK, returns "Hello Ram!"
ShowName('Hi'); // OK, returns "Hi undefined!".
console.log(ShowName('Hello','Ram'));
console.log(ShowName('Hi'));