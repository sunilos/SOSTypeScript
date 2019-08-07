/* Example of creating Default Parameter
 
@author SunilOS  
@version 1.0
@Copyright (c) SunilOS  
@Url www.SunilOs.com
 */

function ShowName(name: string, greeting: string = "Hello") : string {
    return greeting + ' ' + name + '!';
}


console.log(ShowName('Ram'));
console.log(ShowName('Ram', 'Hi'));
console.log(ShowName('Shyam'));
