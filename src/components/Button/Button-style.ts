import styled from "styled-components";
import { colors } from "../../Utils/Constances";

export const StyledButton = styled.button`
  width: 226px;
  height: 36px;
  border: none;
  border-radius: 20px;

  &.primary {
    background: ${colors.primaryBtn};
    color: ${colors.primaryText};
    &:hover{
      opacity: 80%;
    }
  }

  &.secondary {
    background: ${colors.secondaryBtn};
    color: ${colors.secondaryText};
    &:hover{
      opacity: 80%;
    }
  }

  &.textButton {
    background: ${colors.textButtonyBtn};
    color: ${colors.textButtonText};
    &:hover {
      background: #D9DBE9 30%;
    }
  }
`;