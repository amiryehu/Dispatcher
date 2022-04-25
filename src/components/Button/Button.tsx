import React from "react";
import { StyledButton } from "./Button-style";

interface IButton {
  btnText: string,
  className: string,
  onClick?: ()=> void
  // arrowIconIsShow: boolean
 }

const Button = (props: IButton) => {
  const {className, btnText, onClick} = props;

  return <StyledButton className={className} onClick={onClick}>{btnText}</StyledButton>;
};

export default Button;