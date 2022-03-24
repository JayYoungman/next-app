import React from "react";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Listing } from "./index";

describe("Listing", () => {
  const mockResult = {
    title: "Hotel Name",
    thumbnailUrl: "",
    location: "Costa Adeje, Tenerife",
    stars: 5,
    party: {
      adults: 2,
      children: 1,
      infants: 0,
    },
    duration: "7 days",
    departingLocation: "East Midlands",
    price: "£1,136,50",
    startDate: "27th May 2019",
  };

  it("correctly displays all data", () => {
    render(<Listing result={mockResult} />);

    expect(screen.getByTestId("listing")).toHaveTextContent("Hotel Name");
    expect(screen.getByTestId("listing")).toHaveTextContent(
      "Costa Adeje, Tenerife"
    );
    expect(screen.getByTestId("listing")).toHaveTextContent(
      "2 Adults, 1 child"
    );
    expect(screen.getByTestId("listing")).toHaveTextContent(
      "27th May 2019 for 7 days"
    );
    expect(screen.getByTestId("listing")).toHaveTextContent(
      "departing from East Midlands"
    );
    expect(screen.getByTestId("listing")).toHaveTextContent("£1,136,50");
  });
});
