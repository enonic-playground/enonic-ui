import * as React from 'react';

import { Form } from '../../components/form/Form';


export default {
	title: 'Form/Form.Checkbox',
	component: Form.Checkbox,
};

const FormCheckboxTemplate = (args) => <Form.Checkbox {...args} />;
const DivTemplate = (args) => <div {...args} />;

export const Unchecked = FormCheckboxTemplate.bind({});
Unchecked.args = {
	label: 'unchecked'
};

export const UncheckedDisabled = FormCheckboxTemplate.bind({});
UncheckedDisabled.args = {
	disabled: true,
	label: 'unchecked disabled',
};

export const DefaultChecked = FormCheckboxTemplate.bind({});
DefaultChecked.args = {
	defaultChecked: true,
	label: 'defaultChecked',
};

export const DefaultCheckedDisabled = FormCheckboxTemplate.bind({});
DefaultCheckedDisabled.args = {
	defaultChecked: true,
	disabled: true,
	label: 'defaultChecked disabled',
};

export const DefaultIndeterminate = FormCheckboxTemplate.bind({});
DefaultIndeterminate.args = {
	defaultIndeterminate: true,
	label: 'defaultIndeterminate',
};

export const DefaultIndeterminateDisabled = FormCheckboxTemplate.bind({});
DefaultIndeterminateDisabled.args = {
	defaultIndeterminate: true,
	disabled: true,
	label: 'defaultIndeterminate disabled',
};

export const Required = FormCheckboxTemplate.bind({});
Required.args = {
	defaultIndeterminate: true,
	label: 'required',
	required: true,
};

export const Error = FormCheckboxTemplate.bind({});
Error.args = {
	error: true,
	label: 'error'
};

export const ErrorRequired = FormCheckboxTemplate.bind({});
ErrorRequired.args = {
	defaultIndeterminate: true,
	error: true,
	label: 'error',
	required: true,
};

export const ErrorMessage = FormCheckboxTemplate.bind({});
ErrorMessage.args = {
	error: 'Error message',
	label: 'Label'
};

export const ErrorMessageRequired = FormCheckboxTemplate.bind({});
ErrorMessageRequired.args = {
	defaultIndeterminate: true,
	error: 'Error message',
	label: 'Label',
	required: true,
};

export const DarkTheme = DivTemplate.bind({});
DarkTheme.args = {
	children: [
		<Form.Checkbox label='Label'/>,
		<Form.Checkbox disabled label='Label'/>,
		<Form.Checkbox defaultChecked label='Label'/>,
		<Form.Checkbox defaultChecked disabled label='Label'/>,
		<Form.Checkbox defaultIndeterminate label='Label'/>,
		<Form.Checkbox defaultIndeterminate disabled label='Label'/>,
		<Form.Checkbox label='Label' required/>,
		<Form.Checkbox error label='Label'/>,
		<Form.Checkbox error label='Label' required/>,
		<Form.Checkbox error='Error message' label='Label'/>,
		<Form.Checkbox error='Error message' label='Label' required/>,
	],
	className: 'dark-theme',
	style: {
		padding: '20px 30px'
	}
}
