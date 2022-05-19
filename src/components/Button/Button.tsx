import React from "react";
import { StyledButton } from "./Button-style";
import arrowIcon from "../../assets/Icons/back.svg"

interface IButton {
  btnText: string,
  className: string,
  onClick?: ()=> void
  arrowIconIsShow?: boolean
 }

const Button = (props: IButton) => {
  const {className, btnText, onClick, arrowIconIsShow} = props;


return (<div>
        {arrowIconIsShow && <StyledButton className={className} onClick={onClick}>
                                {btnText}
                                {<img src={arrowIcon} style={{transform: "rotate(180deg)"}} ></img>}
                             </StyledButton> }
        {!arrowIconIsShow && <StyledButton className={className} onClick={onClick}>{btnText}</StyledButton> }
      </div>
)
};

export default Button;