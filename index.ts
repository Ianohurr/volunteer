import puppeteer from "puppeteer";

async function Main() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://amazon.com/");
  // Set screen size.
  await page.setViewport({ width: 1080, height: 1024 });

  const searchInput = await page.$("#twotabsearchtextbox");
  searchInput.type("dog food");
  const searchButton = await page.$("#nav-search-submit-button");
  searchButton.click();

  //   await browser.close();
}

Main();
