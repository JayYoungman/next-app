import React from "react";
import styles from "./listing.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../../../components/button";

interface ListingProps {
  result: ListingData;
}

export interface ListingData {
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

export const Listing = ({ result }: ListingProps) => {
  const {
    title,
    thumbnailUrl,
    location,
    stars,
    party,
    duration,
    departingLocation,
    price,
    startDate,
  } = result;

  const renderPartyText = (): string => {
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

  const renderStars = () => {
    const indexes = new Array(stars).fill("");

    const rating: Array<JSX.Element> = [];

    indexes.forEach((_, index) => {
      rating.push(<FontAwesomeIcon key={index.toString()} icon={faStar} />);
    });

    return rating;
  };

  return (
    <div key={title} className={styles.listing}>
      <div className={styles.listingLeft}>
        <div
          className={styles.listingImage}
          style={{ backgroundImage: `url('${thumbnailUrl}')` }}
        />
      </div>
      <div className={styles.listingRight}>
        <h2 className={styles.listingTitle}>{title}</h2>
        <p className={styles.listingLocationText}>{location}</p>
        <div className={styles.listingRating}>{renderStars()}</div>

        <p>{renderPartyText()}</p>
        <p>
          {startDate} for {duration}
        </p>
        <p>departing from {departingLocation}</p>
        <Button className={styles.listingButton}>
          Book Now <span className={styles.listingButtonPrice}>{price}</span>
        </Button>
      </div>
    </div>
  );
};
