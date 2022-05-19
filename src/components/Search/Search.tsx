import * as React from "react";
import BasicSelect from "../Filter/Filter";
import { FilterWrapper } from "../Filter/Filter-style";
import Divider from "@mui/material/Divider";
import { ReactComponent as SearchIcon } from "../../assets/Icons/search.svg";
import {  SearchWrapper, FilterDividerWrapper, SearchContainer, textFieldStyle, searchIconStyle, dividerStyle} from "./Search-style";
import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { style } from "@mui/system";
import { useAppDispatch, useAppSelector } from "../../store/store";
import debounce from 'lodash/debounce';
import { filtersActions } from "../../store/reducers/filterReducer";
import { articlesActions } from "../../store/reducers/articlesReducer";
import RecentSearches from "../RecentSearches/RecentSearches";
import { values } from "lodash";


const SearchForm = () => {
  const dispatch = useAppDispatch();
  const [isFocused, setIsFocused] = useState(false);
  const valueInSearch = useAppSelector(state=>state.filters.valueInSearch);
  const endpoint = useAppSelector(state=>state.filters.Endpoint);
  const articles = useAppSelector(state=>state.apiArticlesResponse.articles);
  const handleFocusState = () => {setIsFocused((state)=> !state)}

  const [value, setValue] = useState('');
  
  const onSearchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filtersActions.setIsSearchPressed(event.target.value));
    // setValue(event.target.value);
    dispatch(articlesActions.setCurrentPage(1));
  }

  const searchChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    return event.target.value;
  }
  const debouncedCallback = debounce(onSearchChangeHandler, 300);


  

  return (
    <div style={{ position:"relative", justifyContent:"space-between"}}>
      <SearchContainer isFocused={isFocused} onBlur={()=>setIsFocused(false)}>
            
          <SearchWrapper>
            <SearchIcon style={{ ...searchIconStyle }} />
            <TextField 
              placeholder="Search"
              onClick={()=>setIsFocused(true)}
              sx={{ ...textFieldStyle }}
              // value={value}
              onChange={debouncedCallback}
              // inputRef={(e)=>dispatch(filtersActions.setIsSearchPressed(e.target.value))}
              autoComplete='off'
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
      {/* { isFocused && <RecentSearches/>} */}
    </div>
  );
};

export default SearchForm;