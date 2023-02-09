import React from 'react';
import { Header } from '../components/header/Header.tsx';


export default {
	title: 'Elements/Header',
	component: Header,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		// layout: 'fullscreen',
	},
};

const Template = (args) => <Header {...args} />;
const DivTemplate = (args) => <div {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	children: 'Normal'
};

export const Sizes = DivTemplate.bind({});
Sizes.args = {
	children: [
		<Header size='huge'>Huge</Header>,
		<Header size='large'>Large</Header>,
		<Header>Normal</Header>,
		<Header size='medium'>Medium</Header>,
		<Header size='small'>Small</Header>,
		<Header size='tiny'>Tiny</Header>
	],
	// className: 'light-theme'
}

export const DarkTheme = DivTemplate.bind({});
DarkTheme.args = {
	children: [
		<Header size='huge'>Huge</Header>,
		<Header size='large'>Large</Header>,
		<Header>Normal</Header>,
		<Header size='medium'>Medium</Header>,
		<Header size='small'>Small</Header>,
		<Header size='tiny'>Tiny</Header>
	],
	className: 'dark-theme'
}

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
