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

export const twoNames = Template.bind({});
twoNames.args = {userName: 'amir yehuda'};

export const threeNames = Template.bind({});
threeNames.args = {userName: 'ofek ben david'};