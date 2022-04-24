import React from "react";
import { FiltersBar } from "./FilterBar-style";
import BasicSelect from "../Filter/Filter";
import ChooseDate from "../DatrPicker/DatePicker";
import { COUNTRY, CATEGORY, SOURCES, SORTBY, DATES, LANGUAGE, ENDPOINT, Endpoint,} from "../../store/Utils/storeConstances";
import { useAppSelector } from "../../store/store";
import { Countries, Languages, Sources, Category, SortBy } from "../../store/Utils/filtersData";

const FilterBar = () => {
  const storeEndPoint = useAppSelector((state) => state.filters.Endpoint);
  return (
    <div>
      {storeEndPoint == Endpoint.TopHeadlines && (
        <FiltersBar>
          <BasicSelect title={COUNTRY} items={Object.keys(Countries)} />
          <BasicSelect title={CATEGORY} items={Object.keys(Category)} />
          <BasicSelect title={SOURCES} items={Object.keys(Sources)} />
        </FiltersBar>
      )}
      {(storeEndPoint == Endpoint.Everything) && (
        <FiltersBar>
          <BasicSelect title={SORTBY} items={Object.keys(SortBy)} />
          <ChooseDate />
          <BasicSelect title={SOURCES} items={Object.keys(Sources)} />
          <BasicSelect title={LANGUAGE} items={Object.keys(Languages)} />
        </FiltersBar>
      )}
    </div>
  );
};

export default FilterBar;