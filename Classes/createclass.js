//Example of Creating Simple Class
// 
//@author SunilOS  
//@version 1.0
//@Copyright (c) SunilOS  
//@Url www.SunilOs.com
//
var Welcome = /** @class */ (function () {
    function Welcome(message) {
        this.greeting = message;
    }
    Welcome.prototype.hello = function () {
        return "Welcome " + this.greeting;
    };
    return Welcome;
}());
var wish = new Welcome("Ram");
console.log(wish.hello());
