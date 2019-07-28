var NewPerson = /** @class */ (function () {
    function NewPerson(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return NewPerson;
}());
var personA = new NewPerson('Ram', 'Shyam');
var personB = { firstName: 'Ram', lastName: 'Ram' };
console.log(personA);
console.log(personB);
