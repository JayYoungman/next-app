import React from "react";
import styles from "./results.module.scss";

interface ResultsLayoutProps {
  children: JSX.Element;
}

export const ResultsLayout = ({ children }: ResultsLayoutProps) => {
  return <div className={styles.container}>{children}</div>;
};
