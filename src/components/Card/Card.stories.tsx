import React from "react";
import data from '../../mockData/mockData.json';

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from './Card';

const name = data.articles[0].source.name;
const title = data.articles[0].title;
const description = data.articles[0].description;
const url = data.articles[0].url;
const urlToImage = data.articles[0].urlToImage;
const publishedAt = data.articles[0].publishedAt;

export default {
    title: 'Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
    <Card {...args}></Card>
)

export const articleCard = Template.bind({});
articleCard.args = {urlToImage, publishedAt, title, name, description, url};