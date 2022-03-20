import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import UnstyledSelectSimple from './Filter';

export default {
    title: 'Filter',
    component: UnstyledSelectSimple,
} as ComponentMeta<typeof UnstyledSelectSimple>;

const Template: ComponentStory<typeof UnstyledSelectSimple> = () => (
    <UnstyledSelectSimple></UnstyledSelectSimple>
)

export const FilterContainer = Template.bind({});
FilterContainer.args = {};