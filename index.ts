import puppeteer from "puppeteer";
import { Volunteer } from "./Volunteer";
async function Main() {
  const volunteer = await new Volunteer();
  await volunteer.search("dog food", "bestSellers");
}

Main();
