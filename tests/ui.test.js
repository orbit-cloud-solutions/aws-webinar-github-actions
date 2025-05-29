/* global test, expect */
const puppeteer = require("puppeteer");

test("Check homepage title", async () => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");

  const title = await page.title();
  expect(title).toBe("GitHub in Action App");

  await browser.close();
});
