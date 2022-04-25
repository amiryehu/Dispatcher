import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FilterWrapper, boxStyle, selectStyle } from "./Filter-style";
import { ReactComponent as DropDownIcon } from "../../assets/Icons/dropdown.svg";
import { useEffect, useState } from "react";
import { COUNTRY, CATEGORY, SOURCES, SORTBY, DATES, LANGUAGE, ENDPOINT, Endpoint } from "../../store/Utils/storeConstances";
import { Countries, Category, Sources, Languages, SortBy, CountriesOptions, LanguagesOptions, CategoriesOptions, SourcesOptions, SortByOptions, EndpointsOptions } from "../../store/Utils/filtersData";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {TitlesOptions} from "../../store/Utils/filtersData";
import {filtersActions} from "../../store/reducers/filterReducer";

interface IFilter {
  title: string,
  items: string[],
  isEndpointFilter?: boolean,
  onChange?: () => void,
}


export default function BasicSelect(props: IFilter) {
  const { title, items, isEndpointFilter } = props;
  const dispatch = useAppDispatch();
  const filterState = useAppSelector(state=>state.filters);

  const initByFilterType = (isEndpoint:boolean | undefined):string => {
    if (isEndpoint) return Endpoint.TopHeadlines;
    return "";
  }

  useEffect(()=>{
    if (filterState[title as TitlesOptions] === ""){
      setSelectedItem(()=>"") //clean selected value
    }
  },[filterState[title as TitlesOptions]])

  const [selectedItem, setSelectedItem] = useState(()=>initByFilterType(isEndpointFilter));

  const handleChange = (event: SelectChangeEvent) => {
    let key = event.target.value as string;
    setSelectedItem(()=>key);
  };

  const handleMenuItem = () => {
    return items.map((item, index) => <MenuItem value={item} key={index}>{item}</MenuItem>);
  };

  useEffect(()=>{
    if(!selectedItem)return;
    switch (title){
      case Endpoint.Everything: {
        dispatch(filtersActions.setEndpoint(selectedItem));
        break;
      }
      case Endpoint.TopHeadlines: {
        dispatch(filtersActions.setEndpoint(selectedItem));
        break;
      }
      case COUNTRY: {
        dispatch(filtersActions.setCountry(Countries[selectedItem as CountriesOptions]));
        break;
      }
      case CATEGORY: {
        dispatch(filtersActions.setCategory(Category[selectedItem as CategoriesOptions]));
        break;
      }
      case SOURCES: {
        dispatch(filtersActions.setSources(Sources[selectedItem as SourcesOptions]));
        break;
      }
      case SORTBY: {
        dispatch(filtersActions.setSortBy(SortBy[selectedItem as SortByOptions]));
        break;
      }
      case DATES: {
        dispatch(filtersActions.setDates(selectedItem));
        break;
      }
      case LANGUAGE: {
        dispatch(filtersActions.setLanguage(Languages[selectedItem as LanguagesOptions]));
        break;
      }
    }
  }, [selectedItem])



  return (
    <FilterWrapper isEndpointFilter={isEndpointFilter}>
      <Box sx={{ ...boxStyle }}>
        <FormControl fullWidth focused={false}>
          <Select
            MenuProps={{
              PaperProps:{sx:{maxHeight:'170px'}}
            }}
            displayEmpty
            value={selectedItem}
            onChange={handleChange} 
            sx={{ ...selectStyle }}
            renderValue={(value) => {
              if (value === "") {
                return <em>{title}</em>;
              } else {
                return <em>{selectedItem}</em>;
              }
            }}
            IconComponent={DropDownIcon}
            >
            {!isEndpointFilter && <MenuItem value="">{title}</MenuItem>}
            {handleMenuItem()}
          </Select>
        </FormControl>
      </Box>
    </FilterWrapper>
  );
}