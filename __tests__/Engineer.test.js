//engineer test
const Engineer = require("../lib/Engineer");

test("Can get employee name with getName()", () => {
  const name = "Barb Holly";
  const Employee = new Employee(name, "33", "barb@moremail.com");
  expect(Employee.getName()).toBe(name);
});

test("Can get id via getid()", () => {
  const id = "33";
  const Employee = new Employee("Barb Holly", id, "barb@moremail.com");
  expect(Employee.getid()).toBe(id);
});

test("Can get employee email via getEmail()", () => {
    const Email = "barb@moremail.com";
    const Employee = new Employee("Barb Holly", "33", Email);
    expect(Employee.getEmail()).toBe(Email);
  });

