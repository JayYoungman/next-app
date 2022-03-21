import React, { useContext } from "react";
import { ResultsContext } from "../context";
import styles from "./sort.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faArrowDownAZ,
  faSterlingSign,
} from "@fortawesome/free-solid-svg-icons";

export const Sort = () => {
  const { sortBy, setSortBy } = useContext(ResultsContext);

  return (
    <>
      <button
        className={`${styles.button} ${sortBy === "a-z" && styles.active}`}
        onClick={() => setSortBy("a-z")}
      >
        sort <strong>alphabetically</strong>
        <FontAwesomeIcon className={styles.icon} icon={faArrowDownAZ} />
      </button>
      <button
        className={`${styles.button} ${sortBy === "price" && styles.active}`}
        onClick={() => setSortBy("price")}
      >
        sort by <strong>price</strong>
        <FontAwesomeIcon className={styles.icon} icon={faSterlingSign} />
      </button>
      <button
        className={`${styles.button} ${sortBy === "rating" && styles.active}`}
        onClick={() => setSortBy("rating")}
      >
        sort by <strong>star rating</strong>
        <FontAwesomeIcon className={styles.icon} icon={faStar} />
      </button>
    </>
  );
};
