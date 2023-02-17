import * as React from 'react';

import { Form } from '../../components/form/Form';


export default {
	title: 'Form/Form',
	component: Form,
};

const FormTemplate = (args) => <Form {...args} />;
// const DivTemplate = (args) => <div {...args} />;

export const Normal = FormTemplate.bind({});
Normal.args = {
	children: [
		<Form.Input label='Email' required type='email' placeholder='Please input your email address'/>,
		<Form.Input label='First name'/>,
		<Form.Input label='Last name'/>,
		<Form.Input label='Age' required type='number' value={0}/>,
	]
};

export const Error = FormTemplate.bind({});
Error.args = {
	children: [
		<Form.Input error='Invalid email address' label='Email' required type='email' value='fnord'/>,
		<Form.Input error label='First name'/>,
	]
};

export const DarkTheme = FormTemplate.bind({});
DarkTheme.args = {
	children: [
		<Form.Input label='Email' required type='email'/>,
		<Form.Input label='First name'/>,
		<Form.Input label='Last name'/>,
		<Form.Input label='Age' required type='number'/>,
	],
	className: 'dark-theme',
	style: {
		padding: '20px 30px'
	}
}
