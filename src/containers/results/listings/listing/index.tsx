import React, { useState } from "react";
import styles from "./listing.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCircleChevronRight,
  faChevronDown,
  faChevronCircleRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
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
  const [isContentOpen, setIsContentOpen] = useState(false);
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
    <>
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
        <div
          className={styles.listingReadMore}
          onClick={() => setIsContentOpen(!isContentOpen)}
        >
          <strong>Read {isContentOpen ? "less" : "more"}</strong> about this
          hotel
          {isContentOpen ? (
            <FontAwesomeIcon
              className={styles.listingReadMoreIcon}
              icon={faChevronDown}
            />
          ) : (
            <FontAwesomeIcon
              className={styles.listingReadMoreIcon}
              icon={faChevronRight}
            />
          )}
        </div>
      </div>
      {isContentOpen && (
        <div className={styles.listingContent}>
          <h3 className={styles.listingContentTitle}>overview</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Why do we use it? It is
            a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using Content here, content here, making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for lorem ipsum will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like).
          </p>
        </div>
      )}
    </>
  );
};
