/* Example of creating Function Parameter
 
@author SunilOS  
@version 1.0
@Copyright (c) SunilOS  
@Url www.SunilOs.com
 */

function displayName(name: string, greeting: string = "Hello") : string {  
    return greeting + ' ' + name + '!';  
}  

console.log(displayName('Typescript'));//Returns "Hello Typescript!"  
console.log(displayName('Typescript', 'Hi'));//Returns "Hi Typescript!".
console.log(displayName('Ram'));//Returns "Hello Sachin!"  
