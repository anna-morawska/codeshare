import React from "react";
import { VISIBILITY_FILTERS } from "@codeshare/common/models/constants";

export const VisibilityFilters = ({ activeFilter, setFilter }) => {
  return (
    <div>
      {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];

        return (
          <span
            style={{ margin: "10px" }}
            key={currentFilter}
            onClick={() => {
              setFilter(currentFilter);
            }}
          >
            {currentFilter === activeFilter && <span>🔸</span>}
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};
