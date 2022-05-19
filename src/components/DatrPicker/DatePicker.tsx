import React, { useEffect, useState } from "react";
import DateIcon from "../../assets/Icons/date.svg";
import DatePicker from "react-datepicker";
import { DatePickerWrapper, DateStyle } from "./DatePicker-style";
import {filtersActions} from "../../store/reducers/filterReducer";
import { formattingDateToURL } from "../../Utils/DateConvert";
import { useAppDispatch, useAppSelector } from "../../store/store";


const BasicDatePicker = () => {
  const [dateRange, setDateRange] = useState<[Date|null,Date|null]>([null, null]);
  const [startDate, endDate] = dateRange;
  const [shouldOpen, setShouldOpen] = useState(false);
  const dispatch = useAppDispatch();
  const filterState = useAppSelector(state=>state.filters);



  useEffect(()=>{

    if(dateRange[0] && dateRange[1]){
      const from = formattingDateToURL(dateRange[0].toDateString());
      const to = formattingDateToURL(dateRange[1].toDateString());

      dispatch(filtersActions.setDatesFrom(from));
      dispatch(filtersActions.setDatesTo(to));
    }

  }, [dateRange])
  console.log(filterState.Dates.from, filterState.Dates.to)


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
