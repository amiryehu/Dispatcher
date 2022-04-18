import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent, SelectProps } from "@mui/material/Select";
import { FilterWrapper, boxStyle, selectStyle } from "./Filter-style";
import { ReactComponent as DropDownIcon } from "../../assets/Icons/dropdown.svg";
import { useEffect, useState } from "react";
import { EVERYTHING_URL, TOP_HEADLINES_URL, COUNTRY, CATEGORY, SOURCES, SORTBY, DATES, LANGUAGE, ENDPOINT, Endpoint } from "../../store/Utils/storeConstances";
import { store } from "../../store/store";
import {filtersActions} from "../../store/reducers/filterReducer"

interface IFilter {
  title: string,
  items: string[],
  isSearchFilter?: boolean,
  onChange?: () => void,
}

export default function BasicSelect(props: IFilter) {
  const { title, items, isSearchFilter } = props;
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(()=>{
    if(isSearchFilter){
      setSelectedItem(()=> Endpoint.TopHeadlines);
    }
  },[])

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedItem(event.target.value as string);
  };

  const handleMenuItem = () => {
    return items.map((item, index) => <MenuItem value={item} key={index}>{item}</MenuItem>);
  };

  useEffect(()=>{
    switch (title){
      case Endpoint.Everything: {
        store.dispatch(filtersActions.setEndpoint(selectedItem));
        break;
      }
      case Endpoint.TopHeadlines: {
        store.dispatch(filtersActions.setEndpoint(selectedItem));
        console.log("title:",title,"selected",selectedItem)
        break;
      }
      case COUNTRY: {
        store.dispatch(filtersActions.setCountry(selectedItem));
        console.log("title:",title,"selected",selectedItem)
        break;
      }
      case CATEGORY: {
        store.dispatch(filtersActions.setCategory(selectedItem));
        break;
      }
      case SOURCES: {
        store.dispatch(filtersActions.setSources(selectedItem));
        break;
      }
      case SORTBY: {
        store.dispatch(filtersActions.setSortBy(selectedItem));
        break;
      }
      case DATES: {
        store.dispatch(filtersActions.setDates(selectedItem));
        break;
      }
      case LANGUAGE: {
        store.dispatch(filtersActions.setLanguage(selectedItem));
        break;
      }
    }
  }, [selectedItem])


  return (
    <FilterWrapper isSearchFilter={isSearchFilter}>
      <Box sx={{ ...boxStyle }}>
        <FormControl fullWidth focused={false}>
          <Select
            displayEmpty
            onChange={handleChange}
            sx={{ ...selectStyle }}
            value={selectedItem}
            IconComponent={DropDownIcon}
            >
            {!isSearchFilter && <MenuItem value="">{title}</MenuItem> }
            {handleMenuItem()}
          </Select>
        </FormControl>
      </Box>
    </FilterWrapper>
  );
}