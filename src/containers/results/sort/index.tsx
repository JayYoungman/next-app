import React, { useContext } from "react";
import { ResultsContext } from "../context";
import styles from "./sort.module.scss";

export const Sort = () => {
  const { sortBy, setSortBy } = useContext(ResultsContext);

  console.log("sortBy", sortBy);

  return (
    <>
      <button
        className={`${styles.button} ${sortBy === "a-z" && styles.active}`}
        onClick={() => setSortBy("a-z")}
      >
        sort <strong>alphabetically</strong>
      </button>
      <button
        className={`${styles.button} ${sortBy === "price" && styles.active}`}
        onClick={() => setSortBy("price")}
      >
        sort by <strong>price</strong>
      </button>
      <button
        className={`${styles.button} ${sortBy === "rating" && styles.active}`}
        onClick={() => setSortBy("rating")}
      >
        sort by <strong>star rating</strong>
      </button>
    </>
  );
};
