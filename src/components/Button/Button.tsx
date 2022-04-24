import React from "react";
import { StyledButton } from "./Button-style";

interface IButton {
  btnText: string,
  className: string,
  articleUrl?: string
  // arrowIconIsShow: boolean
 }

const Button = (props: IButton) => {
  const {className, btnText, articleUrl} = props;

  const openArticleInNewTab = (): void => {
    const newWindow = window.open(articleUrl, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return <StyledButton className={className} onClick={openArticleInNewTab}>{btnText}</StyledButton>;
};

export default Button;