function displayName(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return greeting + ' ' + name + '!';
}

console.log(displayName('Ram','Hello'));//Returns "Hello Ram!"  
console.log(displayName('Typescript', 'Hi'));//Returns "Hi Typescript!".
