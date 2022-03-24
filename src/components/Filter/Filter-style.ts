import styled from "styled-components";
import { border } from "@mui/system";

export const FilterWrapper = styled.div`
  display: flex;
  width: 175px;
  &.searchFilter {
    width: 145px;
  }
`;

export const boxStyle = {
  width: "100%",
  bgcolor: "white",
  borderRadius: "14px",
  "& .MuiOutlinedInput-notchedOutline": {
    border: "0px",
  },
};

export const selectStyle = {
  borderRadius: "14px",
  border: "0px",
  "&:hover .MuiOutlinedInput-notchedOutline": {
    border: "0px",
  },
};
