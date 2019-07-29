/* Example of  Creating Class Interface
 
@author SunilOS  
@version 1.0
@Copyright (c) SunilOS  
@Url www.SunilOs.com
*/


interface Person 
{
    firstName: string;
    lastName: string;
}

class NewPerson implements Person 
{
    constructor (public firstName: string, 
        public lastName: string) 
    {
        
    }
}
var personA = new NewPerson('Ram', 'Shyam');
var personB: Person = { firstName: 'Ram', lastName: 'Kapoor' };
console.log(personA)
console.log(personB)