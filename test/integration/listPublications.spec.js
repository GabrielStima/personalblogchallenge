const service = require("../../src/services/ListPublications").default;
describe("Get formatted publications list", () => {
  test("Should be return a array", async () => {
    const result = await service.getListPublications();
    expect(Array.isArray(result)).toBeTruthy();
  });

  test("The element must have title, body, publishedAt and author as props", async () => {
    const result = await service.getListPublications();
    const element = result[0];
    expect(element).toHaveProperty("title");
    expect(element).toHaveProperty("body");
    expect(element).toHaveProperty("publishedAt");
    expect(element).toHaveProperty("author");
  });
});
