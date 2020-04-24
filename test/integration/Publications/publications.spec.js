const service = require("../../../src/services/Publications").default;
describe("Get list of publications", () => {
  it("Should be return a array", async () => {
    const result = await service.getPublications();
    expect(Array.isArray(result)).toBeTruthy();
  });

  it("The element must have title, body and metadata as props", async () => {
    const result = await service.getPublications();
    const element = result[0];
    expect(element).toHaveProperty("title");
    expect(element).toHaveProperty("body");
    expect(element).toHaveProperty("metadata");
    expect(element).toHaveProperty("metadata.publishedAt");
    expect(element).toHaveProperty("metadata.authorId");
  });
});
