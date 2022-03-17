import React from "react";
import { SidebarLayout } from "../../layouts/sidebar";
import styles from "./results.module.scss";
import { Sort } from "./sort";

export const ResultsContainer = () => {
  return (
    <SidebarLayout sidebar={<Sort />}>
      <div>
        <div>hello</div>
      </div>
    </SidebarLayout>
  );
};
