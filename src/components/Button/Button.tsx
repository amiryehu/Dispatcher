import React from "react";
import { StyledButton } from "./Button-style";

interface IButton {
  btnText: string,
  className: string,
  // arrowIconIsShow: boolean
 }

const Button = (props: IButton) => {
  const {className, btnText} = props;
  return <StyledButton className={className}>{btnText}</StyledButton>;
};

export default Button;