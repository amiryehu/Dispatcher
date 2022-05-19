import React, { useEffect, useState } from "react";
import { FiltersBar } from "./FilterBar-style";
import BasicSelect from "../Filter/Filter";
import ChooseDate from "../DatrPicker/DatePicker";
import { COUNTRY, CATEGORY, SOURCES, SORTBY, DATES, LANGUAGE, ENDPOINT, Endpoint,} from "../../store/Utils/storeConstances";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Countries, Languages, Sources, Category, SortBy } from "../../store/Utils/filtersData";

const FilterBar = () => {
  const storeEndPoint = useAppSelector((state) => state.filters.Endpoint);
  const filterState = useAppSelector(state=>state.filters);
  const [sourceDisable, setSourceDisable] = useState(false);
  const [categoryDisable, setCategoryDisable] = useState(false);
  const [countryDisable, setCountryDisable] = useState(false);

  

  useEffect(()=>{
    if(filterState.Category !== "" || (filterState.Country !== "" && filterState.Country === "Israel")){
      setSourceDisable(true);
    }else{
      setSourceDisable(false);
    }
  },[filterState.Category, filterState.Country])


  useEffect(()=>{
    if(filterState.Sources !== ""){
      setCategoryDisable(true); 
      setCountryDisable(true);
    } else {
      setCategoryDisable(false); 
      setCountryDisable(false);
    }
  },[filterState.Sources])


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