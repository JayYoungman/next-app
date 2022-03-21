import React, { useContext } from "react";
import styles from "./listings.module.scss";
import { Button } from "../../../components/button";
import results from "./data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ResultsContext } from "../context";

interface ResultsData {
  data: ResultData[];
}
interface ResultData {
  title: string;
  location: string;
  stars: number;
  party: PartyData;
  startDate: string;
  duration: string;
  departingLocation: string;
  thumbnailUrl: string;
  price: string;
}
interface PartyData {
  adults: number;
  children?: number;
  infants?: number;
}

const sortResults = (data: ResultData[], sortBy: string) => {
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

  const renderStars = (rating: number) => {
    const indexes = new Array(rating).fill("");

    const stars: Array<JSX.Element> = [];

    indexes.forEach((_, index) => {
      stars.push(<FontAwesomeIcon key={index.toString()} icon={faStar} />);
    });

    return stars;
  };

  return (
    <>
      {sortedResults.map((result) => (
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
            <div className={styles.listingRating}>
              {renderStars(result.stars)}
            </div>

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
