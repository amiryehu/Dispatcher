import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import RecentSearches from './RecentSearches';

export default {
    title: 'RecentSearches',
    component: RecentSearches,
} as ComponentMeta<typeof RecentSearches>;

const lasrSearches = ['a', 'b', 'c', 'd'];


const Template: ComponentStory<typeof RecentSearches> = () => (

    <RecentSearches/>
)

export const FilterContainer = Template.bind({});
FilterContainer.args = {};