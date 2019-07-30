function displayName(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return greeting + ' ' + name + '!';
}
displayName('Typescript'); //Returns "Hello JavaTpoint!"  
displayName('Typescript', 'Hi'); //Returns "Hi JavaTpoint!".  
displayName('Ram'); //Returns "Hello Sachin!"  
console.log(displayName('Typescript'));
console.log(displayName('Typescript', 'Hi'));
console.log(displayName('Ram'));
