// implementing the interface  
var Employee = /** @class */ (function () {
    function Employee(firstN, lastN) {
        this.firstName = firstN;
        this.lastName = lastN;
    }
    Employee.prototype.FullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Employee;
}());
// using the class that implements interface  
var myEmployee = new Employee('Ram', 'Mishra');
var fullName = myEmployee.FullName();
console.log("Name of Person: " + fullName);
