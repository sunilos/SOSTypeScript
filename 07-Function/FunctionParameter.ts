/* Example of creating Function Parameter
 
@author SunilOS  
@version 1.0
@Copyright (c) SunilOS  
@Url www.SunilOs.com
 */

function displayName(name: string, greeting: string ) : string {  
    return greeting + ' ' + name + '!';  
}  

console.log(displayName('Ram','Hello'));//Returns "Hello Ram!"  
console.log(displayName('Typescript', 'Hi'));//Returns "Hi Typescript!".
