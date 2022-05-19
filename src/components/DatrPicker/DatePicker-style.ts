import { red } from "@mui/material/colors";
import styled, { createGlobalStyle } from "styled-components";
import { cardrRadius } from "../../Utils/Constances";
import { colors } from "../../Utils/Constances";

export const DatePickerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 187px;
  border-radius: ${cardrRadius};
  background-color: ${colors.white};
  padding:0 9px;
  :hover{
    border: 1px solid ${colors.gray} ;
  }
  cursor: pointer;
`

export const DateStyle = createGlobalStyle`
  .react-datepicker-wrapper,
  .react-datepicker__input-container,
  .react-datepicker__input-container input {
    :focus-visible{
      outline: none;
    }
    ::placeholder{
      color: ${colors.darkGray};
      font-size: 1rem;
      font-weight: 400;
    }
    cursor: pointer;
    height: 52px;
    border: 0px;
    font-size: 0.78rem;
    font-weight: 400;
    width: 100%;
    display: flex;
    justify-content: center;
    color: ${colors.darkGray};
    border-radius: ${cardrRadius};
  }

`;