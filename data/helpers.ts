import { SortBy } from "./types";

export function getSortById(sortByType: SortBy) {
  const sortByIdMap = {
    featured: "s-result-sort-select_0",
    priceLowToHigh: "s-result-sort-select_1",
    priceHighToLow: "s-result-sort-select_2",
    reviews: "s-result-sort-select_3",
    newArrivals: "s-result-sort-select_4",
    bestSellers: "s-result-sort-select_5",
  };
  return sortByIdMap[sortByType];
}
