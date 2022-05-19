import styled from "styled-components";
import { cardrRadius, colors } from "../../Utils/Constances";

interface FilterWeapperProps{
  isEndpointFilter?: boolean
}

export const FilterWrapper = styled.div<FilterWeapperProps>`
  display: flex;
  width: ${props => props.isEndpointFilter? '165px' : '175px'};
  font-family: "Roboto";
  font-size: 14px;
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
    border: `1px solid ${colors.gray}` ,
  },
  fontFamily: "Roboto",
};

export const selectStyleEndpoint = {
  color: `${colors.darkGray}`,
  borderRadius: `${cardrRadius}`,
  maxHeight: "300px",
  border: "0px",
  fontFamily: "Roboto",
  "&:hover .MuiOutlinedInput-notchedOutline": {
    border: "0px" ,
  },
};