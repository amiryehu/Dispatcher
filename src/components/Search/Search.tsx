import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import BasicSelect from "../Filter/Filter";
import { FilterWrapper } from "../Filter/Filter-style";
import Divider from "@mui/material/Divider";

import { ReactComponent as SearchIcon } from "../../assets/Icons/search.svg";
import { paperStyle, SearchWrapper, FilterDividerWrapper, PaperWrapper, inputBaseStyle, searchIconStyle, dividerStyle} from "./Search-style";
import { useState } from "react";

const SearchForm = (props: any) => {
  const [isFocused, setIsFocused] = useState(false);
  React.useEffect(() => {
    console.log(isFocused);
  }, [isFocused]);
  return (
    <PaperWrapper isFocused={isFocused}>
      <Paper component="form" sx={{ ...paperStyle }}>
        <SearchWrapper>
          <SearchIcon style={{ ...searchIconStyle }} />
          <InputBase
            onClick={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            sx={{ ...inputBaseStyle }}
            autoFocus={true}
            placeholder="Search"
          />
        </SearchWrapper>

        <FilterDividerWrapper>
          <Divider sx={{ ...dividerStyle }} orientation="vertical" />
          <FilterWrapper className="searchFilter">
            <BasicSelect
              title="Eevrithing"
              items={["Eevrithing", "Top Headlines"]}
            />
          </FilterWrapper>
        </FilterDividerWrapper>
      </Paper>
    </PaperWrapper>
  );
};

export default SearchForm;

// import React from "react";

// interface ISearch {}

// const Search = (props: ISearch) => {
//   const {} = props;
//   return (
//     <div>
//       amir
//     </div>
//   );
// };

// export default Search;
