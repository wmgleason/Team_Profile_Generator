// Employee code
// The first class is an `Employee` parent class with the following properties and methods:

// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`



class Employee {
    
    constructor(name, email, ID){
        this.name = name;
        this.email = email;
        this.ID = ID;

    }
    getName(){
        return this.name;
    };
    getId(){
        return this.ID;
    };
    getRole(){
        return "Employee";
    };
    getEmail(){
        return this.email;
    }

}

module.exports = Employee;





// double check - this one is supposed to have Employee/itself as exports?
module.exports = Employee;