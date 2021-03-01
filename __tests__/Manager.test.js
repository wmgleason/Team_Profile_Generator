// manager test
const Manager = require("../lib/Manager");

test("Can get employee name with getName()", () => {
    const name = "Joe Smith";
    const Employee = new Employee(name, "2", "joe@lotsofmail.com");
    expect(Employee.getName()).toBe(name);
  });
  
  test("Can get id via getid()", () => {
    const testValue = 100;
    const Employee = new Employee("Joe Smith", id, "joesmith@lotsofmail.com");
    expect(Employee.getid()).toBe(id);
  });
  
  test("Can get employee email via getEmail()", () => {
      const Email = "joesmith@lotsofmail.com";
      const Employee = new Employee("Joe Smith", 12, Email);
      expect(Employee.getEmail()).toBe(Email);
    });
  
  