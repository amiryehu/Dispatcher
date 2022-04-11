import styled from "styled-components";
import { cardrRadius, colors } from "../../Utils/Constances";

interface FilterWeapperProps{
  isSearchFilter?: boolean
}

export const FilterWrapper = styled.div<FilterWeapperProps>`
  display: flex;
  width: ${props => props.isSearchFilter? '145px' : '175px'};
`;

export const boxStyle = {
  width: "100%",
  height: "52px",
  bgcolor: `${colors.white}`,
  borderRadius: `${cardrRadius}`,
  "& .MuiOutlinedInput-notchedOutline": {
    border: "0px",
  },
};

export const selectStyle = {
  color: `${colors.darkGray}`,
  borderRadius: `${cardrRadius}`,
  border: "0px",
  "&:hover .MuiOutlinedInput-notchedOutline": {
    border: "0px",
  },
};
