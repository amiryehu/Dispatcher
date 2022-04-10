import * as React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/lab";
import { DatePicker as DatePickerMui } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { textFieldStyleDP } from "./DatePicker-style";
import { ReactComponent as DateIcon } from "../../assets/Icons/date.svg";
import { useState } from "react";

export default function BasicDatePicker() {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePickerMui
        label="Date"
        inputFormat="dd/MM/yyy"
        value={value}
        components={{ OpenPickerIcon: DateIcon }}
        // onChange={(newValue: Date) => {
        //   setValue(newValue);
        // }}
        renderInput={(params) => (
          <TextField
            InputLabelProps={{
              shrink: false,
              sx: { display: value !== null ? "none" : "normal" },
            }}
            sx={{ ...textFieldStyleDP }}
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
}
