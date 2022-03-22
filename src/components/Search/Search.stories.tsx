import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Search from "./Search";

export default {
  title: "Search",
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => (
  <Search {...args}></Search>
);

export const search = Template.bind({});
search.args = {};