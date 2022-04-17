import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent, SelectProps } from "@mui/material/Select";
import { FilterWrapper, boxStyle, selectStyle } from "./Filter-style";
import { ReactComponent as DropDownIcon } from "../../assets/Icons/dropdown.svg";
import { useState } from "react";
// import {IFilter} from '../../Utils/Types';

// interface Ifilter{
//   props:IFilter;
// }

interface IFilter {
  title: string,
  items: string[],
  isSearchFilter?: boolean,
  onChange?: () => void,
}

export default function BasicSelect(props: IFilter) {
  const { title, items, isSearchFilter } = props;
  const [selectedItem, setSelectedItem] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedItem(event.target.value as string);
  };

  const handleMenuItem = () => {
    return items.map((item) => <MenuItem value={item}>{item}</MenuItem>);
  };

  return (
    <FilterWrapper isSearchFilter={isSearchFilter}>
      <Box sx={{ ...boxStyle }}>
        <FormControl fullWidth focused={false}>
          <Select
            displayEmpty
            onChange={handleChange}
            sx={{ ...selectStyle }}
            value={selectedItem}
            IconComponent={DropDownIcon}
          >
            <MenuItem value="">{title}</MenuItem>
            {handleMenuItem()}
          </Select>
        </FormControl>
      </Box>
    </FilterWrapper>
  );
}
