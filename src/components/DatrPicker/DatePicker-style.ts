import { red } from "@mui/material/colors";
import styled from "styled-components";
import { cardrRadius } from "../../Utils/Constances";
import { colors } from "../../Utils/Constances";

interface DateButtonProps{
  isClicked?: boolean
}

export const DatePickerStyle = styled.div`
  height: 52px;
  width: 180px;
  color: ${colors.darkGray};
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 12px;
  justify-content: space-between;
  border-radius: ${cardrRadius};
  background-color: ${colors.white};
`

export const DateTitle = styled.div`

`

export const DateButton = styled.button<DateButtonProps>`
  border: 0px;
`








// export const textFieldStyleDP = {
//   bgcolor:`${colors.white}`,
//   borderRadius: `${cardrRadius}`,
//   width: '190px',
//   height: "52px",
  
//   "& .MuiOutlinedInput-notchedOutline": {
//     color: `${colors.darkGray}`,
//     border: "0px",
//   },
//   ".css-ofo4ks-MuiFormLabel-root-MuiInputLabel-root": {
//     color: `${colors.darkGray}`,
//   },
//   ".css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
//     color: `${colors.darkGray}`,
//     cursor: 'default',
//   },
//   "& label.Mui-focused": {
//     color: `${colors.darkGray}`,
//   },
// };
