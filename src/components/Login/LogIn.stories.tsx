import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import LogIn from "./LogIn";

export default {
  title: "LogIn",
  component: LogIn,
} as ComponentMeta<typeof LogIn>;

const Template: ComponentStory<typeof LogIn> = () => (
  <LogIn></LogIn>
);

export const Login = Template.bind({});
Login.args = {};