const Employee = require("../lib/employee");

describe("Employee class", () => {
  it("Creates a new Employee object with parameters", () => {
    const newGuy = new Employee("Jeff", 1, "test@email.com");

    expect(newGuy.name).toEqual("Jeff");
    expect(newGuy.id).toEqual(1);
    expect(newGuy.email).toEqual("test@email.com");
    expect(newGuy.role).toEqual("Employee");
  });
});
