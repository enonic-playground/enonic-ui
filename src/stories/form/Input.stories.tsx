import * as React from 'react';

import { Input } from '../../components/form/Input';


export default {
	title: 'Form/Input',
	component: Input,
};

const InputTemplate = (args) => <Input {...args} />;
const DivTemplate = (args) => <div {...args} />;

export const Normal = InputTemplate.bind({});
Normal.args = {};

export const Stretch = DivTemplate.bind({});
Stretch.args = {
	children: [
		<Input stretch/>,
	]
};

export const Placeholder = DivTemplate.bind({});
Placeholder.args = {
	children: [
		<Input placeholder='Please fill me in'/>,
	]
};

export const Icons = DivTemplate.bind({});
Icons.args = {
	children: [
		<Input icon='search' placeholder='Search...'/>,
		<Input icon='search' iconPosition='left' placeholder='Search...'/>,
	]
};

export const Disabled = DivTemplate.bind({});
Disabled.args = {
	children: [
		<Input disabled/>,
		<Input disabled icon='search'/>,
		<Input disabled icon='search' iconPosition='left'/>
	]
};

export const Error = DivTemplate.bind({});
Error.args = {
	children: [
		<div>
			<Input error/>
			<Input error icon='search'/>
			<Input error icon='search' iconPosition='left'/>
		</div>,
		<div>
			<Input error="Required"/>
			<Input error="Required" icon='search'/>
			<Input error="Required" icon='search' iconPosition='left'/>
		</div>

	]
};

export const DarkTheme = DivTemplate.bind({});
DarkTheme.args = {
	children: [
		<Input icon='search' placeholder='Search...'/>
	],
	className: 'dark-theme',
	style: {
		padding: '20px 30px'
	}
}
