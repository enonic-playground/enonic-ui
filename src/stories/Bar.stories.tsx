import React from 'react';
import {
	AppBar as AppBarComponent,
	Bar,
	ToolBar as ToolBarComponent
} from '../components/bar/Bar.tsx';
import { Button } from '../components/button/Button.tsx';
import { Tab } from '../components/tab/Tab.tsx';

export default {
	title: 'Example/Bar',
	component: Bar,
	argTypes: {},
};

const AppBarTemplate = (args) => <AppBarComponent {...args} />;
// const BarTemplate = (args) => <Bar {...args} />;
const ToolBarTemplate = (args) => <ToolBarComponent {...args} />;

export const AppBar = AppBarTemplate.bind({});
AppBar.args = {
	children: [
		<Button>Users</Button>,
		<Bar.Item verticalAlign='bottom'>
			<Tab.Group style={{
			height: 36
			}}>
				<Tab>Administrator</Tab>
				<Tab active>Anonymous</Tab>
				<Tab>Editors</Tab>
			</Tab.Group>
		</Bar.Item>,
		<Bar.Item verticalAlign='middle'>
			<Button>Middle</Button>
		</Bar.Item>,
		<Bar.Item verticalAlign='top'>
			<Button>XP</Button>
		</Bar.Item>
	],
	style: {
		height: '44px'
	}
};

export const ToolBar = ToolBarTemplate.bind({});
ToolBar.args = {
	children: [
		<Button transparent>Save</Button>,
		<Button transparent>Delete</Button>
	],
	style: {
		height: '39px'
	}
};
