const service = require("../../src/services/WelcomePhrase").default;
describe("Get a tagline", () => {
  it("The element must have quote and author as props", async () => {
    const element = await service.getWelcomePhrase();
    expect(element).toHaveProperty("quote");
    expect(element).toHaveProperty("author");
  });
});
