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
		<Form.Input
			label='Email'
			placeholder='Please input your email address'
			required
			stretch
			type='email'
		/>,
		<Form.Group>
			<Form.Input label='First name'/>
			<Form.Input defaultValue='Doe' label='Last name'/>
		</Form.Group>,
		<Form.Group right>
			<Form.Input
				defaultValue={120}
				label='Age'
				required
				size={3}
				type='number'
			/>
		</Form.Group>,
		<Form.Checkbox
			defaultIndeterminate
			label='Receive spam?'
		/>
	],
};

export const Stretch = FormTemplate.bind({});
Stretch.args = {
	children: [
		<Form.Input
			label='Email'
			placeholder='Please input your email address'
			required
			stretch
			type='email'
		/>,
		<Form.Group>
			<Form.Input label='First name' stretch/>
			<Form.Input defaultValue='Doe' label='Last name' stretch/>
		</Form.Group>,
		<Form.Group stretch>
			<Form.Input label='What'/>
			<Form.Input label='Ever'/>
		</Form.Group>,
		<Form.Group center>
			<Form.Input
				defaultValue={120}
				label='Age'
				required
				size={3}
				type='number'
			/>
		</Form.Group>
	],
	stretch: true
};

export const Error = FormTemplate.bind({});
Error.args = {
	children: [
		<Form.Input error='Invalid email address' label='Email' required type='email' value='fnord'/>,
		<Form.Input error label='First name'/>,
		<Form.Checkbox
			defaultIndeterminate
			error='Make up your mind'
			label='Receive spam?'
			required
		/>
	]
};

export const DarkTheme = FormTemplate.bind({});
DarkTheme.args = {
	children: [
		<Form.Input label='Email' required type='email'/>,
		<Form.Group>
			<Form.Input label='First name'/>
			<Form.Input label='Last name'/>
		</Form.Group>,
		<Form.Input label='Age' required type='number'/>,
		<Form.Checkbox
			defaultIndeterminate
			label='Receive spam?'
		/>
	],
	className: 'enonic dark-theme',
	style: {
		padding: '20px 30px'
	}
}
