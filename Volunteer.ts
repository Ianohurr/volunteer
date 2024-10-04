import puppeteer, { Browser, Page } from "puppeteer";
import { getSortById } from "./data/helpers";
import { SortBy } from "./data/types";

export class Volunteer {
  page: Page;
  browser: Browser;
  constructor() {
    return (async (): Promise<Volunteer> => {
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();
      await page.goto("https://amazon.com/");
      await page.setViewport({ width: 1080, height: 1024 });
      this.browser = browser;
      this.page = page;
      return this;
    })() as unknown as Volunteer; // <-- type assertion  }
  }

  async search(term: string, sortBy?: SortBy) {
    // id of sort type a-autoid-0-announce
    const searchInput = await this.page.$("#twotabsearchtextbox");
    await searchInput.type(term);
    const searchButton = await this.page.$("#nav-search-submit-button");
    await searchButton.click();
    if (sortBy) {
      await this.page.locator(".a-button-dropdown").click();
      const sortById = getSortById(sortBy);
      const sortByOption = await this.page.$(`#${sortById}`);
      sortByOption.click();
    }
  }

  async close() {
    this.browser.close();
  }
}
