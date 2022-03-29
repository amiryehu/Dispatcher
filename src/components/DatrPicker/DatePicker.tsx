import * as React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import {LocalizationProvider} from '@mui/lab';
import {DatePicker as DatePickerMui} from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';




export default function BasicDatePicker() {
  const [value, setValue] = React.useState<Date | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePickerMui
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />} //check params type
      />
    </LocalizationProvider>
  );
}