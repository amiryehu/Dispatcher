import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FilterWrapper, boxStyle, selectStyle } from "./Filter-style";
import { ReactComponent as DropDownIcon } from "../../assets/Icons/dropdown.svg";
import { useEffect, useState } from "react";
import { COUNTRY, CATEGORY, SOURCES, SORTBY, DATES, LANGUAGE, ENDPOINT, Endpoint } from "../../store/Utils/storeConstances";
import {filtersActions} from "../../store/reducers/filterReducer"
import { useAppDispatch } from "../../store/store";

interface IFilter {
  title: string,
  items: string[],
  isEndpointFilter?: boolean,
  onChange?: () => void,
}

export default function BasicSelect(props: IFilter) {
  const { title, items, isEndpointFilter } = props;
  const dispatch = useAppDispatch();

  const IsEndPointOrRegularFilter = (isEndpoint:boolean | undefined):string => {
    if (isEndpoint) return Endpoint.TopHeadlines;
    return "";
  }

  const [selectedItem, setSelectedItem] = useState(IsEndPointOrRegularFilter(isEndpointFilter));

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedItem(event.target.value as string);
  };

  const handleMenuItem = () => {
    return items.map((item, index) => <MenuItem value={item} key={index}>{item}</MenuItem>);
  };

  useEffect(()=>{
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
        dispatch(filtersActions.setCountry(selectedItem));
        break;
      }
      case CATEGORY: {
        dispatch(filtersActions.setCategory(selectedItem));
        break;
      }
      case SOURCES: {
        dispatch(filtersActions.setSources(selectedItem));
        break;
      }
      case SORTBY: {
        dispatch(filtersActions.setSortBy(selectedItem));
        break;
      }
      case DATES: {
        dispatch(filtersActions.setDates(selectedItem));
        break;
      }
      case LANGUAGE: {
        dispatch(filtersActions.setLanguage(selectedItem));
        break;
      }
    }
  }, [selectedItem])


  return (
    <FilterWrapper isEndpointFilter={isEndpointFilter}>
      <Box sx={{ ...boxStyle }}>
        <FormControl fullWidth focused={false}>
          <Select
            displayEmpty
            onChange={handleChange}
            sx={{ ...selectStyle }}
            value={selectedItem}
            renderValue={(value) => {
              if (value.length === 0) {
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