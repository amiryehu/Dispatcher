import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent, SelectProps } from "@mui/material/Select";
import { boxStyle, selectStyle } from "./Filter-style";
import { InputLabel } from "@mui/material";
import { ReactComponent as DropDownIcon } from "../../assets/Icons/dropdown.svg";

interface IFilter {
  title: string;
  items?: string[];
  onChange?: () => void;
}

export default function BasicSelect(props: IFilter) {
  const [dropDownTitle, setDropDownTitle] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setDropDownTitle(event.target.value as string);
  };

  return (
    <Box sx={{ ...boxStyle }}>
      <FormControl fullWidth focused={false}>
        <InputLabel>HARD CODE</InputLabel>
        <Select
          value={dropDownTitle}
          onChange={handleChange}
          sx={{ ...selectStyle }}
          IconComponent={DropDownIcon}
        >
          <MenuItem value="">
            <em>HARD CODE</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
function useStyles() {
  throw new Error("Function not implemented.");
}
