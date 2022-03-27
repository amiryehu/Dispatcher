import React from "react";
import {AavatarWrapper} from './Avatar-style';

interface IAvatar {
  userName: string,
  onClick?: ()=>void
}

const getFirtLetterFromNames = (name: string) => {
  const splitNameArray = name.split(' ');
  splitNameArray.length = 3;
  for(let i = 0; i < splitNameArray.length ; i++) {
    splitNameArray[i] = splitNameArray[i].charAt(0).toUpperCase();
  }
  return splitNameArray.join('');
}

const Avatar = (props: IAvatar) => {
  const {userName} = props;
  const nameInAvatar = getFirtLetterFromNames(userName);

  return (
    <AavatarWrapper >
      {nameInAvatar}
    </AavatarWrapper>
  );
};

export default Avatar;