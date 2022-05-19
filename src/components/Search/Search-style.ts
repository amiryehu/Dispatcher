import { width } from "@mui/system";
import styled from "styled-components";
import { screenSize , colors } from "../../Utils/Constances";

interface IPaperWrapperProps {
  isFocused: boolean;
}

export const SearchContainer = styled.div<IPaperWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 57px;
  padding-left: 15px;
  /* margin-left: 7%; */
  margin-left: ${(props) => (props.isFocused ? "4.8%" : "7%")};
  border-radius: 10px;
  color: rgba(0, 0, 0, 0.87);
  background-color: ${colors.white};
  width: ${(props) => (props.isFocused ? "623px" : "423px")};
  transition-duration: 500ms;
  position: relative;
 
  @media screen and (max-width: 900px) {
    width: ${(props) => (props.isFocused ? "520px" : "423px")};
  }
  
  @media screen and (max-width: ${screenSize.tablet}) {
    width: 300px;
    margin-left: 12%;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;


export const searchIconStyle = {
  marginRight: "4px",
  minWidth: "26px",
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
};

export const textFieldStyle = {
  "& .MuiOutlinedInput-notchedOutline": {
    border: "0px",
  },
};