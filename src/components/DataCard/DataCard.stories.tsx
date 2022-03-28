import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import DataCard from "./DataCard";

export default {
    title: 'DataCard',
    component: DataCard,
} as ComponentMeta<typeof DataCard>;

const Template: ComponentStory<typeof DataCard> = (args) => (
    <DataCard {...args}></DataCard>
)

export const source = Template.bind({});
source.args = {title: 'title'};