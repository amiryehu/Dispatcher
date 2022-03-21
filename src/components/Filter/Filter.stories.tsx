import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import BasicSelect from './Filter';

export default {
    title: 'Filter',
    component: BasicSelect,
} as ComponentMeta<typeof BasicSelect>;

const Template: ComponentStory<typeof BasicSelect> = () => (
    <BasicSelect title="amir"></BasicSelect>
)

export const FilterContainer = Template.bind({});
FilterContainer.args = {};