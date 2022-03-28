import React from "react";
import {AvatarWrapper} from './Avatar-style';

interface IAvatar {
  userName: string,
  onClick?: ()=>void
}

const getFirstLetterFromNames = (name: string) => {
  const splitNameArray = name.split(' ');
  splitNameArray.length = 3;
  splitNameArray.map(({}, i) => splitNameArray[i] = splitNameArray[i].charAt(0).toUpperCase());
  return splitNameArray.join('');
};


const Avatar = (props: IAvatar) => {
  const {userName} = props;
  const nameInAvatar = getFirstLetterFromNames(userName);

  return (
    <AvatarWrapper >
      {nameInAvatar}
    </AvatarWrapper>
  );
};

export default Avatar;