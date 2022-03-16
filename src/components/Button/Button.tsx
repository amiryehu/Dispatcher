import React from "react";
// import styled from "styled-components";
// import ts from "typescript";
import { StyledButton } from "./Button-style";

interface props extends React.HTMLAttributes<HTMLButtonElement> {
  btnText:string
 }

const Button = ({...args}: props) => {
  return <StyledButton className={args.className}>{args.btnText}</StyledButton>;
};

export default Button;
