import styled from "styled-components";
import { border } from "@mui/system";

export const boxStyle = {
  
    width: "28vh",
    bgcolor: "white",
    borderRadius: "14px",
    // "hover .MuiOutlinedInput-root .MuiInputBase-root .MuiInputBase-colorPrimar": {  // cancel the botder from Box component
    //     border: "0px", 
    //   },
};

export const selectStyle = {
  borderRadius: "14px",
  "&:hover .MuiOutlinedInput-notchedOutline": {
    border: "0px",
  },
};