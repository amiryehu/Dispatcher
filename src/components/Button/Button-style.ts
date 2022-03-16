import styled from "styled-components";

const colors ={
  primaryBtn: '#0058b9',
  primaryText: '#ffffff',
  secondaryBtn: '#D9DBE9',
  secondaryText: '#5A5A89',
  textButtonyBtn: '#FFFFFF',
  textButtonText: '#5A5A89'
}

export const StyledButton = styled.button`
  width: 226px;
  height: 36px;
  border: none;
  border-radius: 20px;
  justify-content: center;
  align-items: center;

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