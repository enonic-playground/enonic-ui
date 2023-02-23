import * as React from 'react';

import { Button } from '../components/button/Button';
import { Svg } from '../components/Svg';
import { widthFromHeight } from '../utils/widthFromHeight';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Elements/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		// backgroundColor: { control: 'color' },
	},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const ButtonTemplate = (args) => <Button {...args} />;
const ButtonGroupTemplate = (args) => <Button.Group {...args} />;
const DivTemplate = (args) => <div {...args} />;

export const Normal = ButtonTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
	children: 'Change password',
};

export const WithIcon = DivTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithIcon.args = {
	children: [
		<Button uppercase>
			<Svg color='white' height={25} name='users_404x404' width={widthFromHeight({
				ascpectRatio: 1,
				newHeight: 25,
			})}/>
			Users
		</Button>,
		<Button uppercase>
			<Svg color='white' height={25} name='users_512x464' width={widthFromHeight({
				oldHeight: 464,
				oldWidth: 512,
				newHeight: 25,
			})}/>
			Users
		</Button>
	]
};


export const Colors = ButtonGroupTemplate.bind({});
Colors.args = {
	children: [
		<Button>Standard</Button>,
		<Button color='white'>White</Button>,
		<Button color='red'>Red</Button>,
		<Button color='orange'>Orange</Button>,
		<Button color='green'>Green</Button>,
		<Button color='blue'>Blue</Button>,
		<Button color='purple'>Purple</Button>,
		<Button color='gray'>Gray</Button>,
		<Button color='black'>Black</Button>
	]
};

export const TransparentColors = ButtonGroupTemplate.bind({});
TransparentColors.args = {
	children: [
		<Button transparent>Standard</Button>,
		<Button color='white' transparent>White</Button>,
		<Button color='red' transparent>Red</Button>,
		<Button color='orange' transparent>Orange</Button>,
		<Button color='green' transparent>Green</Button>,
		<Button color='blue' transparent>Blue</Button>,
		<Button color='purple' transparent>Purple</Button>,
		<Button color='gray' transparent>Gray</Button>,
		<Button color='black' transparent>Black</Button>
	]
};

export const DarkTheme = DivTemplate.bind({});
DarkTheme.args = {
	children: [
		<Button.Group style={{
			marginBottom: '20px'
		}}>
			<Button>Standard</Button>
			<Button color='white'>White</Button>
			<Button color='red'>Red</Button>
			<Button color='orange'>Orange</Button>
			<Button color='green'>Green</Button>
			<Button color='blue'>Blue</Button>
			<Button color='purple'>Purple</Button>
			<Button color='gray'>Gray</Button>
			<Button color='black'>Black</Button>
		</Button.Group>,
		<Button.Group>
			<Button transparent>Standard</Button>
			<Button color='white' transparent>White</Button>
			<Button color='red' transparent>Red</Button>
			<Button color='orange' transparent>Orange</Button>
			<Button color='green' transparent>Green</Button>
			<Button color='blue' transparent>Blue</Button>
			<Button color='purple' transparent>Purple</Button>
			<Button color='gray' transparent>Gray</Button>
			<Button color='black' transparent>Black</Button>
		</Button.Group>
	],
	className: 'enonic dark-theme',
	style: {
		padding: '20px 30px'
	}
}

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
