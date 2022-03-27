import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import BasicSelect from "../Filter/Filter";
import { FilterWrapper } from "../Filter/Filter-style";
import Divider from "@mui/material/Divider";

import { ReactComponent as SearchIcon } from "../../assets/Icons/search.svg";
import { paperStyle, SearchWrapper, FilterDividerWrapper, PaperWrapper, textFieldStyle, searchIconStyle, dividerStyle} from "./Search-style";
import { useState } from "react";
import { TextField } from "@mui/material";

const SearchForm = () => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocusState = () => {setIsFocused((state)=> !state)}
  
  return (
    <PaperWrapper isFocused={isFocused}>
      <Paper component="form" sx={{ ...paperStyle }}>
        <SearchWrapper>
          <SearchIcon style={{ ...searchIconStyle }} />
          <TextField 
            autoFocus={true}
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
      </Paper>
    </PaperWrapper>
  );
};

export default SearchForm;