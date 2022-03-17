import React from "react";
import { SidebarLayout } from "../../layouts/sidebar";
import styles from "./results.module.scss";
import { Sort } from "./sort";
import { Listings } from "./listings";

export const ResultsContainer = () => {
  return (
    <SidebarLayout sidebar={<Sort />}>
      <Listings />
    </SidebarLayout>
  );
};
