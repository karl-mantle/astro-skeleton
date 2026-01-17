describe("Home page", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:4321", {
      waitUntil: "networkidle0",
    });
  });

  it("loads successfully", async () => {
    const title = await page.title();
    expect(title.length).toBeGreaterThan(0);
  });

  it("has an h1", async () => {
    const h1 = await page.$("h1");
    expect(h1).not.toBeNull();
  });
});
