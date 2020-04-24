const service = require("../../../src/services/Authors").default;
describe("Get list of authors", () => {
  it("Should be return a array", async () => {
    const result = await service.getAuthors();
    expect(Array.isArray(result)).toBeTruthy();
  });

  it("The element must have name and id as props", async () => {
    const result = await service.getAuthors();
    const element = result[0];
    expect(element).toHaveProperty("id");
    expect(element).toHaveProperty("name");
  });
});
