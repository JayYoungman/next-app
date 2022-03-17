import React from "react";
import styles from "./listings.module.scss";
import { Button } from "../../../components/button";
import results from "./data.json";

interface ResultsData {
  data: Array<{
    title: string;
    location: string;
    stars: number;
    party: PartyData;
    startDate: string;
    duration: string;
    departingLocation: string;
    thumbnailUrl: string;
    price: string;
  }>;
}

interface PartyData {
  adults: number;
  children?: number;
  infants?: number;
}
export const Listings = () => {
  const { data }: ResultsData = results;

  console.log("data", data);

  const renderPartyText = (party: PartyData): string => {
    const { adults, children, infants } = party;

    let text = `${adults} Adults`;

    if (children) {
      text += children > 1 ? `, ${children} children` : `, ${children} child `;
    }
    if (infants) {
      text += infants > 1 ? `, ${infants} infants` : `, ${infants} infant `;
    }

    return text;
  };

  return (
    <>
      {data.map((result) => (
        <div key={result.title} className={styles.listing}>
          <div className={styles.listingLeft}>
            <div
              className={styles.listingImage}
              style={{ backgroundImage: `url('${result.thumbnailUrl}')` }}
            />
          </div>
          <div className={styles.listingRight}>
            <h2 className={styles.listingTitle}>{result.title}</h2>
            <p className={styles.listingLocationText}>{result.location}</p>
            <p>{result.stars} stars</p>
            <p>{renderPartyText(result.party)}</p>
            <p>
              {result.startDate} for {result.duration}
            </p>
            <p>departing from {result.departingLocation}</p>
            <Button>
              Book Now{" "}
              <span className={styles.listingButtonPrice}>{result.price}</span>
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};