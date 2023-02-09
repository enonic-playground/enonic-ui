import React from 'react';
import { Tab } from '../components/tab/Tab.tsx';

export default {
	title: 'Example/Tab',
	component: Tab,
	argTypes: {},
};

const DivTemplate = (args) => <div {...args} />;
// const TabTemplate = (args) => <Tab {...args} />;
const TabGroupTemplate = (args) => <Tab.Group {...args} />;

export const Group = TabGroupTemplate.bind({});
Group.args = {
	children: [
		<Tab>One</Tab>,
		<Tab>Two</Tab>,
		<Tab active>Three</Tab>,
		<Tab>Four</Tab>,
		<Tab>Five</Tab>
	],
};

export const Colors = DivTemplate.bind({});
Colors.args = {
	children: [
		<Tab.Group style={{marginBottom: '20px'}}>
			<Tab>One</Tab>
			<Tab>Two</Tab>
			<Tab active>Three</Tab>
			<Tab>Four</Tab>
			<Tab>Five</Tab>
		</Tab.Group>,
		<Tab.Group style={{marginBottom: '20px'}}>
			<Tab color='white'>One</Tab>
			<Tab color='white'>Two</Tab>
			<Tab active color='white'>Three</Tab>
			<Tab color='white'>Four</Tab>
			<Tab color='white'>Five</Tab>
		</Tab.Group>,
		<Tab.Group style={{marginBottom: '20px'}}>
			<Tab color='red'>One</Tab>
			<Tab color='red'>Two</Tab>
			<Tab active color='red'>Three</Tab>
			<Tab color='red'>Four</Tab>
			<Tab color='red'>Five</Tab>
		</Tab.Group>,
		<Tab.Group style={{marginBottom: '20px'}}>
			<Tab color='orange'>One</Tab>
			<Tab color='orange'>Two</Tab>
			<Tab active color='orange'>Three</Tab>
			<Tab color='orange'>Four</Tab>
			<Tab color='orange'>Five</Tab>
		</Tab.Group>,
		<Tab.Group style={{marginBottom: '20px'}}>
			<Tab color='green'>One</Tab>
			<Tab color='green'>Two</Tab>
			<Tab active color='green'>Three</Tab>
			<Tab color='green'>Four</Tab>
			<Tab color='green'>Five</Tab>
		</Tab.Group>,
		<Tab.Group style={{marginBottom: '20px'}}>
			<Tab color='blue'>One</Tab>
			<Tab color='blue'>Two</Tab>
			<Tab active color='blue'>Three</Tab>
			<Tab color='blue'>Four</Tab>
			<Tab color='blue'>Five</Tab>
		</Tab.Group>,
		<Tab.Group style={{marginBottom: '20px'}}>
			<Tab color='purple'>One</Tab>
			<Tab color='purple'>Two</Tab>
			<Tab active color='purple'>Three</Tab>
			<Tab color='purple'>Four</Tab>
			<Tab color='purple'>Five</Tab>
		</Tab.Group>,
		<Tab.Group style={{marginBottom: '20px'}}>
			<Tab color='gray'>One</Tab>
			<Tab color='gray'>Two</Tab>
			<Tab active color='gray'>Three</Tab>
			<Tab color='gray'>Four</Tab>
			<Tab color='gray'>Five</Tab>
		</Tab.Group>,
		<Tab.Group style={{marginBottom: '20px'}}>
			<Tab color='black'>One</Tab>
			<Tab color='black'>Two</Tab>
			<Tab active color='black'>Three</Tab>
			<Tab color='black'>Four</Tab>
			<Tab color='black'>Five</Tab>
		</Tab.Group>,
		<Tab.Group style={{marginBottom: '20px'}}>
			<Tab>Standard</Tab>
			<Tab color='white'>White</Tab>
			<Tab color='red'>Red</Tab>
			<Tab color='orange'>Orange</Tab>
			<Tab color='green'>Green</Tab>
			<Tab color='blue'>Blue</Tab>
			<Tab color='purple'>Purple</Tab>
			<Tab color='gray'>Gray</Tab>
			<Tab color='black'>Black</Tab>
		</Tab.Group>
	],
	className: 'light-theme',
	style: {
		padding: '30px 20px'
	}
}


export const DarkTheme = DivTemplate.bind({});
DarkTheme.args = {
	children: [
		<Tab.Group style={{marginBottom: '20px'}}>
			<Tab>One</Tab>
			<Tab>Two</Tab>
			<Tab active>Three</Tab>
			<Tab>Four</Tab>
			<Tab>Five</Tab>
		</Tab.Group>,
		<Tab.Group style={{marginBottom: '20px'}}>
			<Tab color='white'>One</Tab>
			<Tab color='white'>Two</Tab>
			<Tab active color='white'>Three</Tab>
			<Tab color='white'>Four</Tab>
			<Tab color='white'>Five</Tab>
		</Tab.Group>,
		<Tab.Group style={{marginBottom: '20px'}}>
			<Tab color='red'>One</Tab>
			<Tab color='red'>Two</Tab>
			<Tab active color='red'>Three</Tab>
			<Tab color='red'>Four</Tab>
			<Tab color='red'>Five</Tab>
		</Tab.Group>,
		<Tab.Group style={{marginBottom: '20px'}}>
			<Tab color='orange'>One</Tab>
			<Tab color='orange'>Two</Tab>
			<Tab active color='orange'>Three</Tab>
			<Tab color='orange'>Four</Tab>
			<Tab color='orange'>Five</Tab>
		</Tab.Group>,
		<Tab.Group style={{marginBottom: '20px'}}>
			<Tab color='green'>One</Tab>
			<Tab color='green'>Two</Tab>
			<Tab active color='green'>Three</Tab>
			<Tab color='green'>Four</Tab>
			<Tab color='green'>Five</Tab>
		</Tab.Group>,
		<Tab.Group style={{marginBottom: '20px'}}>
			<Tab color='blue'>One</Tab>
			<Tab color='blue'>Two</Tab>
			<Tab active color='blue'>Three</Tab>
			<Tab color='blue'>Four</Tab>
			<Tab color='blue'>Five</Tab>
		</Tab.Group>,
		<Tab.Group style={{marginBottom: '20px'}}>
			<Tab color='gray'>One</Tab>
			<Tab color='gray'>Two</Tab>
			<Tab active color='gray'>Three</Tab>
			<Tab color='gray'>Four</Tab>
			<Tab color='gray'>Five</Tab>
		</Tab.Group>,
		<Tab.Group style={{marginBottom: '20px'}}>
			<Tab color='purple'>One</Tab>
			<Tab color='purple'>Two</Tab>
			<Tab active color='purple'>Three</Tab>
			<Tab color='purple'>Four</Tab>
			<Tab color='purple'>Five</Tab>
		</Tab.Group>,
		<Tab.Group style={{marginBottom: '20px'}}>
			<Tab color='black'>One</Tab>
			<Tab color='black'>Two</Tab>
			<Tab active color='black'>Three</Tab>
			<Tab color='black'>Four</Tab>
			<Tab color='black'>Five</Tab>
		</Tab.Group>,
		<Tab.Group style={{marginBottom: '20px'}}>
			<Tab>Standard</Tab>
			<Tab color='white'>White</Tab>
			<Tab color='red'>Red</Tab>
			<Tab color='orange'>Orange</Tab>
			<Tab color='green'>Green</Tab>
			<Tab color='blue'>Blue</Tab>
			<Tab color='purple'>Purple</Tab>
			<Tab color='gray'>Gray</Tab>
			<Tab color='black'>Black</Tab>
		</Tab.Group>
	],
	className: 'dark-theme',
	style: {
		padding: '30px 20px'
	}
}
