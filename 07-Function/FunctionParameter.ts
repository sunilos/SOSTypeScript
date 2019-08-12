/* Example of creating Function Parameter
 
@author SunilOS  
@version 1.0
@Copyright (c) SunilOS  
@Url www.SunilOs.com
 */

function displayName(name: string, greeting: string = "Hello") : string {  
    return greeting + ' ' + name + '!';  
}  
displayName('Typescript');//Returns "Hello Typescript!"  
displayName('Typescript', 'Hi'); //Returns "Hi Typescript!".  
displayName('Ram'); //Returns "Hello Sachin!"  


console.log(displayName('Typescript'));
console.log(displayName('Typescript', 'Hi'));
console.log(displayName('Ram'));
