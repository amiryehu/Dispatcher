import React from "react";
import styled from "styled-components";

export const cardrRadius = "14px";
export const cardShadow = "0px 32px 64px 0px #0000000D";

export const colors = {
  darkBlue: "#262146",
  darkGray: "#5A5A89",
  blue: "#0058B9",
  gray: "#D9DBE9",
  lightGray: "#F3F3FF",
  fadedWhite: "#F8F8FF",
  white: "#FFFFFF",
  black: "#14142b",
  azure: "00B9FF"
};

export const pieColors ={
  black: "#030035",
  orange: "#FF9800",
  lightAzure: "#DDF3FE",
  darkBlue: "#343A6E",
  gray: "#E8E8E8"
}

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

export const screenSize = {
  tablet: '770px',
  mobile: '375px'
};