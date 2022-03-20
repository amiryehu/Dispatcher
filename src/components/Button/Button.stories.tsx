import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}></Button>
);

export const Primary = Template.bind({});
Primary.args = { className: "primary" };

export const secondery = Template.bind({});
secondery.args = { className: "secondary" };

export const textButton = Template.bind({});
textButton.args = { className: "textButton"};
