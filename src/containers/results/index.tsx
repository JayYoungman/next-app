import React, { useState } from "react";
import { SidebarLayout } from "../../layouts/sidebar";
import { Sort } from "./sort";
import { Listings } from "./listings";

import { ResultsContext, ResultsContextValue } from "./context";

export const ResultsContainer = () => {
  const [sortBy, setSortBy] = useState("a-z");

  const contextValue: ResultsContextValue = {
    sortBy,
    setSortBy,
  };

  return (
    <ResultsContext.Provider value={contextValue}>
      <SidebarLayout sidebar={<Sort />}>
        <Listings />
      </SidebarLayout>
    </ResultsContext.Provider>
  );
};
