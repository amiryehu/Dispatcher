import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import BasicSelect from './Filter';

export default {
    title: 'Filter',
    component: BasicSelect,
} as ComponentMeta<typeof BasicSelect>;

const itemlist = ['a', 'b', 'c', 'd'];
const title = "Source";

const Template: ComponentStory<typeof BasicSelect> = (args) => (

    <BasicSelect  {...args}></BasicSelect>
)

export const FilterContainer = Template.bind({});
FilterContainer.args = {items: itemlist, title: title};