import React from 'react';
import { Tab } from '../components/tab/Tab.tsx';

export default {
	title: 'Example/Tab',
	component: Tab,
	argTypes: {},
};

// const TabTemplate = (args) => <Tab {...args} />;
const TabGroupTemplate = (args) => <Tab.Group {...args} />;

export const Group = TabGroupTemplate.bind({});
Group.args = {
	children: [
		<Tab>One</Tab>,
		<Tab active>Two (active)</Tab>,
		<Tab>Three</Tab>
	],
};
