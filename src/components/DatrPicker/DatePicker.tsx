import React, { useState } from "react";
import DateIcon from "../../assets/Icons/date.svg";
import DatePicker from "react-datepicker";
import { DatePickerWrapper, DateStyle } from "./DatePicker-style";

const BasicDatePicker = () => {
  const [dateRange, setDateRange] = useState<[Date|null,Date|null]>([null, null]);
  const [startDate, endDate] = dateRange;
  const [shouldOpen, setShouldOpen] = useState(false);

  return (
    <DatePickerWrapper onClick={()=>setShouldOpen(true)}>
      
      <DatePicker
        open={shouldOpen}
        placeholderText="Date"
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
          
        }}
        onClickOutside={()=>setShouldOpen(false)}
        />
        <DateStyle/>
        <img src={DateIcon}/>
    </DatePickerWrapper>
  );
};

export default BasicDatePicker;
