import { width } from "@mui/system";
import styled from "styled-components";
import { screenSize } from "../../Utils/Constances";

interface IPaperWrapperProps {
  isFocused: boolean;
}

export const SearchContainerWrapper = styled.div<IPaperWrapperProps>`
  display: flex;
  align-items: center;
  width: ${(props) => (props.isFocused ? "623px" : "423px")};
  transition-duration: 500ms;

  @media screen and (max-width: ${screenSize.tablet}) {
    width: 300px;
  }
`;

export const SearchContainer = styled.div`
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  width: 100%;
  height: 57px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding-left: 15px;
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
  m: 0.5,
};

export const textFieldStyle = {
  "& .MuiOutlinedInput-notchedOutline": {
    border: "0px",
  },
};