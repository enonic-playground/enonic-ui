import * as React from 'react';

import { Checkbox } from '../../components/form/Checkbox';


export default {
	title: 'Form/Checkbox',
	component: Checkbox,
};

const CheckboxTemplate = (args) => <Checkbox {...args} />;
const DivTemplate = (args) => <div {...args} />;

export const Normal = CheckboxTemplate.bind({});
Normal.args = {};

export const Disabled = CheckboxTemplate.bind({});
Disabled.args = {
	disabled: true,
};

export const DefaultChecked = CheckboxTemplate.bind({});
DefaultChecked.args = {
	defaultChecked: true
};

export const DefaultCheckedDisabled  = CheckboxTemplate.bind({});
DefaultCheckedDisabled.args = {
	defaultChecked: true,
	disabled: true,
};

export const DefaultIndeterminate = CheckboxTemplate.bind({});
DefaultIndeterminate.args = {
	defaultIndeterminate: true
};

export const DefaultIndeterminateDisabled = CheckboxTemplate.bind({});
DefaultIndeterminateDisabled.args = {
	defaultIndeterminate: true,
	disabled: true,
};

export const Error = CheckboxTemplate.bind({});
Error.args = {
	error: 'true'
};

export const Name = CheckboxTemplate.bind({});
Name.args = {
	name: 'Myname'
};

export const Id = CheckboxTemplate.bind({});
Id.args = {
	id: 'myId'
};

export const Value = CheckboxTemplate.bind({});
Value.args = {
	value: 'myValue'
};

export const DarkTheme = DivTemplate.bind({});
DarkTheme.args = {
	children: [
		<Checkbox/>,
		<Checkbox disabled/>,
		<Checkbox defaultChecked/>,
		<Checkbox defaultChecked disabled/>,
		<Checkbox defaultIndeterminate/>,
		<Checkbox defaultIndeterminate disabled/>,
		<Checkbox error/>
	],
	className: 'dark-theme',
	style: {
		padding: '20px 30px'
	}
}
