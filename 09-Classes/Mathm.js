/* Example of Creating  Class Constructor
 
@author SunilOS
@version 1.0
@Copyright (c) SunilOS
@Url www.SunilOs.com
*/
//creating a Student class.  
var Mathm = /** @class */ (function () {
    //defining constructor   
    function Mathm(a, b) {
        this.a = a;
        this.b = b;
    }
    Mathm.prototype.sum = function () {
        return this.a + this.b;
    };
    Mathm.prototype.max = function () {
        if (this.a > this.b) {
            return this.a;
        }
        else {
            return this.b;
        }
    };
    Mathm.prototype.min = function () {
        if (this.a < this.b) {
            return this.a;
        }
        else {
            return this.b;
        }
    };
    return Mathm;
}());
