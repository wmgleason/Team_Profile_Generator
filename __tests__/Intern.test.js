// Intern test
const Intern = require("../lib/Intern");

test("Can get employee name with getName()", () => {
    const name = "Jack Black";
    const Employee = new Employee(name, "333", "blackjack@mailsss.com");
    expect(Employee.getName()).toBe(name);
  });
  
  test("Can get id via getid()", () => {
    const id = "333";
    const Employee = new Employee("Jack Black", id, "blackjack@mailsss.com");
    expect(Employee.getid()).toBe(id);
  });
  
  test("Can get employee email via getEmail()", () => {
      const Email = "blackjack@mailsss.com";
      const Employee = new Employee("Jack Black", "333", Email);
      expect(Employee.getEmail()).toBe(Email);
    });
  
    test("Can get employee school via getschool()", () => {
        const school = "Yale";
        const Employee = new Employee("Jack Black", "333", school);
        expect(Employee.getSchool()).toBe(school);
      });
  