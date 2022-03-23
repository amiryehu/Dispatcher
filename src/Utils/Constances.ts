import React from "react";
import styled from "styled-components";

export const cardrRadius = "14px";

export const colors = {
  darkBlue: "#262146",
  darkGray: "#5A5A89",
  blue: "#0058B9",
  gray: "#D9DBE9",
  lightGray: "#F3F3FF",
  fadedWhite: "#F8F8FF",
  white: "#FFFFFF",
  black: "#14142b",
};

export const buttonType = {
  primary: "primary",
  secondary: "secondary",
  textButton: "textButton",
  logInButton: "logInButton",
};

export const SeparatingLine = styled.div`
    border-top: solid 1px;
    width: 100%;
    margin-bottom: 10px;
    border-color: ${colors.gray};
`;
