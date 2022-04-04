import React from "react";
import { FiltersBar } from "./FilterBar-style";
import BasicSelect from "../Filter/Filter";
import { SeparatingLine } from "../../Utils/Constances";



const FilterBar = () => {
    return (
        <FiltersBar>
            <BasicSelect title={"Country"} items={['a','b']}/>
            <BasicSelect title={"Category"} items={['a','b']}/>
            <BasicSelect title={"Sources"} items={['a','b']}/>
        </FiltersBar>
    )
}

export default FilterBar;