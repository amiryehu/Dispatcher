import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Avatar from "./Avatar";

export default {
  title: "Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args}></Avatar>
);

export const header = Template.bind({});
header.args = {};