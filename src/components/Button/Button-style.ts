import styled from "styled-components";
import { colors } from "../../Utils/Constances";

export const StyledButton = styled.button`
  width: 226px;
  height: 36px;
  border: none;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.primary {
    background: ${colors.blue};
    color: ${colors.white};
    gap: 10px;
    &:hover {
      opacity: 80%;
      cursor: pointer;
    }
  }

  &.secondary {
    background: ${colors.gray};
    color: ${colors.darkGray};
    &:hover {
      opacity: 80%;
    }
  }

  &.textButton {
    background: ${colors.white};
    color: ${colors.darkGray};
    width: auto;
    &:hover {
      background: ${colors.gray} 30%;
    }
  }

  &.logInButton {
    width: 100%;
    border-radius: 10px;
    background: ${colors.blue};
    color: ${colors.white};
  }
`;


// export const StyledIcon = styled.img`
//   transform: rotate(20deg)
// `