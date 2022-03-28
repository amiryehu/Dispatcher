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
  border-radius: 10px;
  color: rgba(0, 0, 0, 0.87);
  background-color: ${colors.white};
  width: ${(props) => (props.isFocused ? "623px" : "423px")};
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