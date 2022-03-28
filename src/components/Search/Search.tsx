import * as React from "react";
import BasicSelect from "../Filter/Filter";
import { FilterWrapper } from "../Filter/Filter-style";
import Divider from "@mui/material/Divider";

import { ReactComponent as SearchIcon } from "../../assets/Icons/search.svg";
import {  SearchWrapper, FilterDividerWrapper, SearchContainer, textFieldStyle, searchIconStyle, dividerStyle} from "./Search-style";
import { useState } from "react";
import { TextField } from "@mui/material";
import { style } from "@mui/system";

const SearchForm = () => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocusState = () => {setIsFocused((state)=> !state)}
  
  return (
    <SearchContainer isFocused={isFocused}>
        <SearchWrapper>
          <SearchIcon style={{ ...searchIconStyle }} />
          <TextField 
            placeholder="Search"
            onClick={handleFocusState}
            onBlur={handleFocusState}
            sx={{ ...textFieldStyle }}/>
        </SearchWrapper>

        <FilterDividerWrapper>
          <Divider sx={{ ...dividerStyle }} orientation="vertical" />
          <BasicSelect
            title="Everything"
            items={["Everything", "Top Headlines"]}
            isSearchFilter={true}
          />
        </FilterDividerWrapper>
    </SearchContainer>
  );
};

export default SearchForm;