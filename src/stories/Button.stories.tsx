import React from 'react';

import { Button } from '../components/button/Button.tsx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		// backgroundColor: { control: 'color' },
	},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const ButtonTemplate = (args) => <Button {...args} />;
const ButtonGroupTemplate = (args) => <Button.Group {...args} />;

export const Normal = ButtonTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
	children: 'Change password',
};

export const Colors = ButtonGroupTemplate.bind({});
Colors.args = {
	children: [
		<Button>Standard</Button>,
		<Button color='red'>Red</Button>,
		<Button color='orange'>Orange</Button>,
		<Button color='green'>Green</Button>,
		<Button color='blue'>Blue</Button>,
		<Button color='gray'>Gray</Button>,
		<Button color='black'>Black</Button>
	]
};

export const TransparentColors = ButtonGroupTemplate.bind({});
TransparentColors.args = {
	children: [
		<Button transparent>Standard</Button>,
		<Button color='red' transparent>Red</Button>,
		<Button color='orange' transparent>Orange</Button>,
		<Button color='green' transparent>Green</Button>,
		<Button color='blue' transparent>Blue</Button>,
		<Button color='gray' transparent>Gray</Button>,
		<Button color='black' transparent>Black</Button>
	]
};

export const Primary = ButtonTemplate.bind({});
Primary.args = {
	children: 'Change password',
	primary: true,
};

export const Input = ButtonTemplate.bind({});
Input.args = {
	as: 'input',
	value: 'Input Button',
};
