import React from 'react';
import { Header } from '../components/header/Header.tsx';


export default {
	title: 'Example/Header',
	component: Header,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		// layout: 'fullscreen',
	},
};

const Template = (args) => <Header {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	children: 'Normal'
};

export const Huge = Template.bind({});
Huge.args = {
	children: 'Huge',
	size: 'huge',
};

export const Large = Template.bind({});
Large.args = {
	children: 'Large',
	size: 'large',
};

export const Medium = Template.bind({});
Medium.args = {
	children: 'Medium',
	size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
	children: 'Small',
	size: 'small',
};

export const Tiny = Template.bind({});
Tiny.args = {
	children: 'Tiny',
	size: 'tiny',
};

export const Div = Template.bind({});
Div.args = {
	as: 'div',
	children: 'Div'
};

export const Span = Template.bind({});
Span.args = {
	as: 'span',
	children: 'Span'
};

export const HugeH6 = Template.bind({});
HugeH6.args = {
	as: 'h6',
	children: 'Huge H6',
	size: 'huge',
};

export const TinyH1 = Template.bind({});
TinyH1.args = {
	as: 'h1',
	children: 'Tiny H1',
	size: 'tiny',
};
