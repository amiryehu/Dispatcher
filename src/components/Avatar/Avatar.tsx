import React from "react";
import {AavatarWrapper} from './Avatar-style';

interface IAvatar {
  firstName: string,
  lastName: string,
  onClick?: ()=>void
}

const Avatar = (props: IAvatar) => {
  const {firstName, lastName} = props;
  return (
    <AavatarWrapper >
      {firstName.charAt(0) + lastName.charAt(0)}
    </AavatarWrapper>
  );
};

export default Avatar;