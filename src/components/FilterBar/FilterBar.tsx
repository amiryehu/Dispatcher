import React from "react";
import { FiltersBar } from "./FilterBar-style";
import BasicSelect from "../Filter/Filter";
import ChooseDate from "../DatrPicker/DatePicker";
import {  COUNTRY,  CATEGORY,  SOURCES,  SORTBY,  DATES,  LANGUAGE,  ENDPOINT,  Endpoint,} from "../../store/Utils/storeConstances";
import { store, useAppSelector } from "../../store/store";

const FilterBar = () => {
  const storeEndPoint = useAppSelector((state) => state.filters.Endpoint);

  const renderFiltersByEndpoint = (endpoint: string) => {
    if (endpoint == Endpoint.TopHeadlines) {
      return (
        <FiltersBar>
          <BasicSelect title={COUNTRY} items={["a", "b"]} />
          <BasicSelect title={CATEGORY} items={["a", "b"]} />
          <BasicSelect title={SOURCES} items={["a", "b"]} />
        </FiltersBar>
      );
    } else {
      return (
        <FiltersBar>
          <BasicSelect title={SORTBY} items={["a", "b"]} />
          <ChooseDate />
          <BasicSelect title={SOURCES} items={["a", "b"]} />
          <BasicSelect title={LANGUAGE} items={["a", "b"]} />
        </FiltersBar>
      );
    }
  };

  return renderFiltersByEndpoint(storeEndPoint);
};

export default FilterBar;