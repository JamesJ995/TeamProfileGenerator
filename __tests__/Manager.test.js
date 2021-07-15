const Manager = require("../lib/manager");

describe("Manager class", () => {
  it("Creates a new Manager object with parameters", () => {
    const newGuy = new Manager("Jeff", 1, "test@email.com", "3");

    expect(newGuy.name).toEqual("Jeff");
    expect(newGuy.id).toEqual(1);
    expect(newGuy.email).toEqual("test@email.com");
    expect(newGuy.officeNumber).toEqual("3");
    expect(newGuy.role).toEqual("Manager");
  });
});