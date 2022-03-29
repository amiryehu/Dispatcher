import styled from "styled-components";
import { cardrRadius } from "../../Utils/Constances";

interface FilterWeapperProps{
  isSearchFilter?: boolean
}

export const FilterWrapper = styled.div<FilterWeapperProps>`
  display: flex;
  width: ${props => props.isSearchFilter? '145px' : '175px'};
`;

export const boxStyle = {
  width: "100%",
  bgcolor: "white",
  borderRadius: `${cardrRadius}`,
  "& .MuiOutlinedInput-notchedOutline": {
    border: "0px",
  },
};

export const selectStyle = {
  borderRadius: `${cardrRadius}`,
  border: "0px",
  "&:hover .MuiOutlinedInput-notchedOutline": {
    border: "0px",
  },
};
