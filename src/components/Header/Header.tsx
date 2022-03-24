import React from "react";
import { ReactComponent as Logo } from "../../assets/Icons/logo.svg";


interface IHeader {}

const Header = (props: IHeader) => {
  const {} = props;
  return (
    <div>
        <Logo/>
    </div>
  );
};

export default Header;