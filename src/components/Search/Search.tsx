import * as React from "react";
import BasicSelect from "../Filter/Filter";
import { FilterWrapper } from "../Filter/Filter-style";
import Divider from "@mui/material/Divider";

import { ReactComponent as SearchIcon } from "../../assets/Icons/search.svg";
import {  SearchWrapper, FilterDividerWrapper, SearchContainerWrapper, textFieldStyle, searchIconStyle, dividerStyle, SearchContainer} from "./Search-style";
import { useState } from "react";
import { TextField } from "@mui/material";

const SearchForm = () => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocusState = () => {setIsFocused((state)=> !state)}
  
  return (
    <SearchContainerWrapper isFocused={isFocused}>
      <SearchContainer>
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
          <FilterWrapper className="searchFilter">
            <BasicSelect
              title="Everything"
              items={["Everything", "Top Headlines"]}
            />
          </FilterWrapper>
        </FilterDividerWrapper>
      </SearchContainer>
    </SearchContainerWrapper>
  );
};

export default SearchForm;