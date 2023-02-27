import * as React from 'react';
import '../style/test.sass';

export default {
	title: 'Various/Breakpoints',
};

const DivTemplate = (args) => <div {...args} />;

export const Normal = DivTemplate.bind({});
Normal.args = {
	children: [
		<div
			className='enonic test breakpoints-up'
			style={{
				padding: '10px',
				height: '2em',
				textAlign: 'center'
			}}
		/>,
		<div
			className='enonic test breakpoints'
			style={{
				padding: '10px',
				height: '2em',
				textAlign: 'center'
			}}
		/>,
		<div
			className='enonic test breakpoints-down'
			style={{
				padding: '10px',
				height: '2em',
				textAlign: 'center'
			}}
		/>,
	]
};
