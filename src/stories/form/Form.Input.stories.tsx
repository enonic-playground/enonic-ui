import * as React from 'react';

import { Form } from '../../components/form/Form';


export default {
	title: 'Form/Form.Input',
	component: Form.Input,
};

const FormTemplate = (args) => <Form {...args} />;
const FormInputTemplate = (args) => <Form.Input {...args} />;
// const DivTemplate = (args) => <div {...args} />;

export const Normal = FormInputTemplate.bind({});
Normal.args = {};

export const Label = FormInputTemplate.bind({});
Label.args = {
	label: 'Label'
};

export const LabelPosition = FormTemplate.bind({});
LabelPosition.args = {
	children: [
		<Form.Input label="Label"/>,
		<Form.Input label="Label" labelPosition="top"/>,
		<Form.Input label="Label" labelPosition="left"/>,
		<Form.Input label="Label" labelPosition="right"/>,
		<Form.Input label="Label" labelPosition="bottom"/>
	]
};

export const Stretch = FormTemplate.bind({});
Stretch.args = {
	children: [
		<Form.Input label="Label"/>,
		<Form.Input label="Label" stretch/>,
		<Form.Input label="Label" labelPosition="left" stretch/>,
		<Form.Input label="Label" labelPosition="right" stretch/>,
		<Form.Input label="Label" labelPosition="bottom" stretch/>
	],
	stretch: true
};

export const Required = FormTemplate.bind({});
Required.args = {
	children: [
		<Form.Input required/>,
		<Form.Input label="Label" required/>,
		<Form.Input label="Label" labelPosition="left" required/>,
		<Form.Input label="Label" labelPosition="right" required/>,
		<Form.Input label="Label" labelPosition="bottom" required/>
	]
};

export const Error = FormTemplate.bind({});
Error.args = {
	children: [
		<Form.Input error/>,
		<Form.Input error label="Label"/>,
		<Form.Input error label="Label" labelPosition="left"/>,
		<Form.Input error label="Label" labelPosition="right"/>,
		<Form.Input error label="Label" labelPosition="bottom"/>,
		<Form.Input error required/>,
		<Form.Input error label="Label" required/>,
		<Form.Input error label="Label" labelPosition="left" required/>,
		<Form.Input error label="Label" labelPosition="right" required/>,
		<Form.Input error label="Label" labelPosition="bottom" required/>,
		<Form.Input error="Message" required/>,
		<Form.Input error="Message" label="Label" required/>,
		<Form.Input error="Message" label="Label" labelPosition="left" required/>,
		<Form.Input error="Message" label="Label" labelPosition="right" required/>,
		<Form.Input error="Message" label="Label" labelPosition="bottom" required/>
	]
};

export const Disabled = FormTemplate.bind({});
Disabled.args = {
	children: [
		<Form.Input disabled/>,
		<Form.Input disabled label="Label"/>,
		<Form.Input disabled label="Label" labelPosition="left"/>,
		<Form.Input disabled label="Label" labelPosition="right"/>,
		<Form.Input disabled label="Label" labelPosition="bottom"/>,
		<Form.Input disabled required/>,
		<Form.Input disabled label="Label" required/>,
		<Form.Input disabled label="Label" labelPosition="left" required/>,
		<Form.Input disabled label="Label" labelPosition="right" required/>,
		<Form.Input disabled label="Label" labelPosition="bottom" required/>,
		<Form.Input disabled error/>,
		<Form.Input disabled error label="Label"/>,
		<Form.Input disabled error label="Label" labelPosition="left"/>,
		<Form.Input disabled error label="Label" labelPosition="right"/>,
		<Form.Input disabled error label="Label" labelPosition="bottom"/>,
		<Form.Input disabled error required/>,
		<Form.Input disabled error label="Label" required/>,
		<Form.Input disabled error label="Label" labelPosition="left" required/>,
		<Form.Input disabled error label="Label" labelPosition="right" required/>,
		<Form.Input disabled error label="Label" labelPosition="bottom" required/>,
		<Form.Input disabled error="Message" required/>,
		<Form.Input disabled error="Message" label="Label" required/>,
		<Form.Input disabled error="Message" label="Label" labelPosition="left" required/>,
		<Form.Input disabled error="Message" label="Label" labelPosition="right" required/>,
		<Form.Input disabled error="Message" label="Label" labelPosition="bottom" required/>
	]
};
