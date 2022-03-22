import React from "react";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Listing } from "./index";

describe("Listing", () => {
  const mockResult = {
    title: "Hotel Name",
    thumbnailUrl: "",
    location: "",
    stars: 5,
    party: {
      adults: 1,
      children: 1,
      infants: 1,
    },
    duration: "",
    departingLocation: "",
    price: "",
    startDate: "",
  };

  it("correctly displays all data", () => {
    render(<Listing result={mockResult} />);

    expect(screen.getByTestId("listing-title")).toHaveTextContent("Hotel Name");
  });
});
