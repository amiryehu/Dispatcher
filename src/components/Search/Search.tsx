import * as React from "react";
import BasicSelect from "../Filter/Filter";
import { FilterWrapper } from "../Filter/Filter-style";
import Divider from "@mui/material/Divider";
import { ReactComponent as SearchIcon } from "../../assets/Icons/search.svg";
import {  SearchWrapper, FilterDividerWrapper, SearchContainer, textFieldStyle, searchIconStyle, dividerStyle} from "./Search-style";
import { useState } from "react";
import { TextField } from "@mui/material";
import { style } from "@mui/system";
import { useAppDispatch, useAppSelector } from "../../store/store";
import debounce from 'lodash/debounce';
import { filtersActions } from "../../store/reducers/filterReducer";


const SearchForm = () => {
  const dispatch = useAppDispatch();
  const [isFocused, setIsFocused] = useState(false);
  const handleFocusState = () => {setIsFocused((state)=> !state)}
  const valueInSearch = useAppSelector(state=>state.filters.valueInSearch);
  
  const valueCangeInSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filtersActions.setIsSearchPressed(event.target.value));
  }
  const debouncedCallback = debounce(valueCangeInSearch, 1000);
  

  return (
    <SearchContainer isFocused={isFocused}>
        <SearchWrapper>
          <SearchIcon style={{ ...searchIconStyle }} />
          <TextField 
            placeholder="Search"
            onFocus={handleFocusState}
            onBlur={handleFocusState}
            sx={{ ...textFieldStyle }}
            onChange={debouncedCallback}
            />
        </SearchWrapper>

        <FilterDividerWrapper>
          <Divider sx={{ ...dividerStyle }} orientation="vertical" />
          <BasicSelect
            title="Top Headlines"
            items={["Everything", "Top Headlines"]}
            isEndpointFilter={true}
          />
        </FilterDividerWrapper>
    </SearchContainer>
  );
};

export default SearchForm;