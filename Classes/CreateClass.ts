//Example of Creating Simple Class
// 
//@author SunilOS  
//@version 1.0
//@Copyright (c) SunilOS  
//@Url www.SunilOs.com
//
class Welcome {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    hello() {
        return "Welcome " + this.greeting;
    }
}

let wish = new Welcome("Ram");  // creating an object or  instance
console.log(wish.hello());