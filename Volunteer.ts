import puppeteer, { Browser, Page } from "puppeteer";

export class Volunteer {
  page: Page;
  browser: Browser;
  constructor() {
    return (async (): Promise<Volunteer> => {
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();
      await page.goto("https://amazon.com/");
      this.browser = browser;
      this.page = page;
      return this;
    })() as unknown as Volunteer; // <-- type assertion  }
  }

  async search(term: string) {
    const searchInput = await this.page.$("#twotabsearchtextbox");
    searchInput.type(term);
    const searchButton = await this.page.$("#nav-search-submit-button");
    searchButton.click();
  }

  async close() {
    this.browser.close();
  }
}
