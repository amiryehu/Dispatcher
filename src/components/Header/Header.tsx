import React from "react";
import { ReactComponent as Logo } from "../../assets/Icons/logo.svg";
import { HeaderWrapper, LeftSide, RightSide } from "./Header-style";
import Search from "../Search/Search";
import Settings from "./Settings";
import Notifications from "./Notifications";
import Avatar from "../Avatar/Avatar";

interface IHeader {}

const Header = (props: IHeader) => {
  const {} = props;
  return (
    <HeaderWrapper>
      <LeftSide>
        <Logo style={{ width: "110px", height: "110px" }} />
        <Search />
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
