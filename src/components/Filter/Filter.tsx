import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent, SelectProps } from "@mui/material/Select";
import { boxStyle, selectStyle } from "./Filter-style";
import { ReactComponent as DropDownIcon } from "../../assets/Icons/dropdown.svg";

interface IFilter {
  title: string;
  items: string[];
  onChange?: () => void;
}

export default function BasicSelect(props: IFilter) {
  const { title, items } = props;
  const [selectedItem, setSelectedItem] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedItem(event.target.value as string);
  };

  return (
    <Box sx={{ ...boxStyle }}>
      <FormControl fullWidth focused={false}>
        <Select
          displayEmpty
          onChange={handleChange}
          sx={{ ...selectStyle }}
          renderValue={(value)=>{
            if (value.length === 0) {
              return <em>{title}</em>;
            } else {
              return <em>{selectedItem}</em>;
            }
          }}
          value={selectedItem}
          IconComponent={DropDownIcon}
        >
          <MenuItem value="">{title}</MenuItem>
          {items.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}