import { red } from "@mui/material/colors";
import styled from "styled-components";
import { cardrRadius } from "../../Utils/Constances";
import { colors } from "../../Utils/Constances";

export const textFieldStyleDP = {
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: `${cardrRadius}`,
    color: `${colors.darkGray}`,
    border: "0px",
  },
  ".css-ofo4ks-MuiFormLabel-root-MuiInputLabel-root": {
    color: `${colors.darkGray}`,
  },
  ".css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
    color: `${colors.darkGray}`,
  },
  "& label.Mui-focused": {
    color: `${colors.darkGray}`,
  },
};