function displayName(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return greeting + ' ' + name + '!';
}

console.log(displayName('Typescript'));//Returns "Hello Typescript!"  
console.log(displayName('Typescript', 'Hi'));//Returns "Hi Typescript!".
console.log(displayName('Ram'));//Returns "Hello Sachin!"  
