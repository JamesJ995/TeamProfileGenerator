const Engineer = require("../lib/engineer");

describe("Engineer class", () => {
  it("Creates a new Engineer object with parameters", () => {
    const newGuy = new Engineer("Jeff", 1, "test@email.com", "githubname");

    expect(newGuy.name).toEqual("Jeff");
    expect(newGuy.id).toEqual(1);
    expect(newGuy.email).toEqual("test@email.com");
    expect(newGuy.github).toEqual("githubname");
    expect(newGuy.role).toEqual("Engineer");
  });
});