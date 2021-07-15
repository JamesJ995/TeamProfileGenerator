const Intern = require("../lib/intern");

describe("Intern class", () => {
  it("Creates a new Intern object with parameters", () => {
    const newGuy = new Intern("Jeff", 1, "test@email.com", "school");

    expect(newGuy.name).toEqual("Jeff");
    expect(newGuy.id).toEqual(1);
    expect(newGuy.email).toEqual("test@email.com");
    expect(newGuy.school).toEqual("school");
    expect(newGuy.role).toEqual("Intern");
  });
});