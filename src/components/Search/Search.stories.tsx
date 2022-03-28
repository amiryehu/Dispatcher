import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchForm from "./Search";

export default {
  title: "Search",
  component: SearchForm,
} as ComponentMeta<typeof SearchForm>;

const Template: ComponentStory<typeof SearchForm> = () => (
  <SearchForm />
);

export const search = Template.bind({});
search.args = {};