import React, { useContext } from "react";
import results from "./data.json";
import { ResultsContext } from "../context";
import { Listing, ListingData } from "./listing";

interface ResultsData {
  data: ListingData[];
}

const sortResults = (data: ListingData[], sortBy: string) => {
  if (sortBy === "price") {
    return data.sort((a, b) => a.price.localeCompare(b.price));
  }

  if (sortBy === "rating") {
    return data.sort((a, b) => b.stars - a.stars);
  }

  return data.sort((a, b) => a.title.localeCompare(b.title));
};

export const Listings = () => {
  const { sortBy } = useContext(ResultsContext);
  const { data }: ResultsData = results;
  const sortedResults = sortResults(data, sortBy);

  return (
    <>
      {sortedResults.map((result) => (
        <Listing key={result.title} result={result} />
      ))}
    </>
  );
};
