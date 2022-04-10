import React, { useState } from "react";
import { DatePickerStyle, DateTitle, DateButton } from "./DatePicker-style";
import DateIcon from '../../assets/Icons/date.svg'

const BasicDatePicker = () => {
  const [isClicked, setIsClicked] = useState(false);

  return <DatePickerStyle>
          <DateTitle>
            Date
          </DateTitle>
          <DateButton isClicked={isClicked}>
            <img src={DateIcon}/>
          </DateButton>
        </DatePickerStyle>;
};
export default BasicDatePicker;
