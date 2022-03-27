import { width } from "@mui/system";
import styled from "styled-components";
import { screenSize } from "../../Utils/Constances";

interface IPaperWrapperProps {
  isFocused: boolean
}

export const PaperWrapper = styled.div<IPaperWrapperProps>`
  display: flex;
  align-items: center;
  width: ${props => props.isFocused? '623px' : '423px'};
  transition-duration: 500ms;
  
  @media screen and (max-width: ${screenSize.tablet}) {
    width: 300px;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const searchIconStyle = {
  marginRight: "4px", 
  minWidth: "26px"
};

export const FilterDividerWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: ${screenSize.tablet}) {
    display: none;
  }
`;

export const dividerStyle = {
  height: 28, 
  m: 0.5
};

export const paperStyle = {
  width: "100%",
  height: "57px",
  display: "flex",
  justifyContent: "space-between",
  paddingLeft: "15px",
  alignItems: "center",
  borderRadius: "10px",
};

export const textFieldStyle = {
  "& .MuiOutlinedInput-notchedOutline": {
    border: "0px",
  },
};

//   background-color: #fff;
//   color: rgba(0, 0, 0, 0.87);
// transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
//     transition-property: box-shadow;
//     transition-duration: 300ms;
//     transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//     transition-delay: 0ms;
// align-items: center;
// border-radius: 10px;