import styled from "styled-components";
import { cardrRadius, colors } from "../../Utils/Constances";

interface FilterWeapperProps{
  isEndpointFilter?: boolean
}

export const FilterWrapper = styled.div<FilterWeapperProps>`
  display: flex;
  width: ${props => props.isEndpointFilter? '155px' : '175px'};
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
  maxHeight: "300px",
  border: "0px",
  "&:hover .MuiOutlinedInput-notchedOutline": {
    border: "0px",
  },
};