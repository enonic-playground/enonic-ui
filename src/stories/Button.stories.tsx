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
const Template = (args) => <Button {...args} />;

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
	children: 'Change password',
};

export const Primary = Template.bind({});
Primary.args = {
	children: 'Change password',
	primary: true,
};

export const Transparent = Template.bind({});
Transparent.args = {
	children: 'Save',
	transparent: true,
};

export const Input = Template.bind({});
Input.args = {
  as: 'input',
  type: 'button',
  value: 'Input type"button"',
};
