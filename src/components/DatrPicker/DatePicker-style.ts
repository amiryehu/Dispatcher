import { red } from "@mui/material/colors";
import styled from "styled-components";
import { cardrRadius } from "../../Utils/Constances";
import { colors } from "../../Utils/Constances";

export const textFieldStyleDP = {
  bgcolor:`${colors.white}`,
  borderRadius: `${cardrRadius}`,
  width: '190px',
  height: "52px",
  
  "& .MuiOutlinedInput-notchedOutline": {
    color: `${colors.darkGray}`,
    border: "0px",
  },
  ".css-ofo4ks-MuiFormLabel-root-MuiInputLabel-root": {
    color: `${colors.darkGray}`,
  },
  ".css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
    color: `${colors.darkGray}`,
    cursor: 'default',
  },
  "& label.Mui-focused": {
    color: `${colors.darkGray}`,
  },
};
