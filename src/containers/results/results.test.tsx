import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ResultsContainer } from "./index";

describe("Listings", () => {
  const { getAllByTestId } = render(<ResultsContainer />);
  const listings = getAllByTestId("listing");
  const sortByPrice = screen.queryByTestId("sortby-price");
  const sortByRating = screen.queryByTestId("sortby-rating");

  screen.debug();
  it("should render all listings", () => {
    expect(listings.length).toBe(3);
  });

  it("sorts alphabetically by default", () => {
    expect(listings[0]).toHaveTextContent("Aguamarina Golf Hotel");
    expect(listings[1]).toHaveTextContent("Iberostar Grand Salome");
    expect(listings[2]).toHaveTextContent("Las Piramides Resort");
  });

  it("should sort by price", async () => {
    fireEvent.change(sortByPrice as Element);

    expect(listings[0]).toHaveTextContent("Iberostar Grand Salome");
  });

  it("should sort by price", async () => {
    fireEvent.change(sortByRating as Element);

    expect(listings[0]).toHaveTextContent("Iberostar Grand Salome");
  });
});
