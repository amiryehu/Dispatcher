import React, { useEffect } from "react";
import Logo from "../../assets/Icons/logo.svg";
import { HeaderWrapper, LeftSide, RightSide, logoStyle, SearchAndRecentSearches } from "./Header-style";
import Search from "../Search/Search";
import Settings from "./Settings";
import Notifications from "./Notifications";
import Avatar from "../Avatar/Avatar";
import RecentSearches from "../RecentSearches/RecentSearches";
import { useAppSelector } from "../../store/store";

interface IHeader {}


const Header = (props: IHeader) => {
  const endpoint = useAppSelector(state=>state.filters.Endpoint);
  const {} = props;
  
  useEffect(()=>{
    
    
  },[endpoint])
  
  return (
    <HeaderWrapper>
      <LeftSide>
        <img src={Logo} style={logoStyle} />
        <SearchAndRecentSearches>
          {/* <RecentSearches /> */}
          <Search />
        </SearchAndRecentSearches>
      </LeftSide>

      <RightSide>
        <Settings />
        <Notifications />
        <Avatar userName="amir yehuda" />
      </RightSide>
    </HeaderWrapper>
  );
};

export default Header;
