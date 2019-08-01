/* Example of Creating  Class Constructor
 
@author SunilOS  
@version 1.0
@Copyright (c) SunilOS  
@Url www.SunilOs.com
*/


//creating a Student class.  
class Mathm {
    //defining fields    
    a: number;
    b: number;


    //defining constructor   
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    sum() {
        return this.a + this.b;
    }


    max() {
        if (this.a > this.b) {
            return this.a;
        } else {
            return this.b;
        }
    }

    min() {
        if (this.a < this.b) {
            return this.a;
        } else {
            return this.b;
        }
    }

}


