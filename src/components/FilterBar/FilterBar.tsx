import React from "react";
import { FiltersBar } from "./FilterBar-style";
import BasicSelect from "../Filter/Filter";
import ChooseDate from "../DatrPicker/DatePicker";
import { COUNTRY, CATEGORY, SOURCES, SORTBY, DATES, LANGUAGE, ENDPOINT, Endpoint,} from "../../store/Utils/storeConstances";
import { useAppSelector } from "../../store/store";

const FilterBar = () => {
  const storeEndPoint = useAppSelector((state) => state.filters.Endpoint);

  return (
    <div>
      {storeEndPoint == Endpoint.TopHeadlines && (
        <FiltersBar>
          <BasicSelect title={COUNTRY} items={["asd", "auu"]} />
          <BasicSelect title={CATEGORY} items={["a", "b"]} />
          <BasicSelect title={SOURCES} items={["a", "b"]} />
        </FiltersBar>
      )}
      {(storeEndPoint == Endpoint.Everything) && (
        <FiltersBar>
          <BasicSelect title={SORTBY} items={["popo", "rel"]} />
          <ChooseDate />
          <BasicSelect title={SOURCES} items={["a", "b"]} />
          <BasicSelect title={LANGUAGE} items={["a", "b"]} />
        </FiltersBar>
      )}
    </div>
  );
};

export default FilterBar;