import React from 'react';
import {
	AppBar as AppBarComponent,
	Bar,
} from '../../components/bar/Bar.tsx';
import { Button } from '../../components/button/Button.tsx';
import { Tab } from '../../components/tab/Tab.tsx';

export default {
	title: 'Modules/Bar/AppBar',
	component: AppBarComponent,
	argTypes: {},
};

const AppBarTemplate = (args) => <AppBarComponent {...args} />;
const DivTemplate = (args) => <div {...args} />;



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
			<Button>Top</Button>
		</Bar.Item>
	],
	style: {
		height: '44px'
	}
};


export const DarkTheme = DivTemplate.bind({});
DarkTheme.args = {
	children: [
		<AppBar>
			<Button>Users</Button>
			<Bar.Item verticalAlign='bottom'>
				<Tab.Group style={{
					height: 36
				}}>
					<Tab>Administrator</Tab>
					<Tab active>Anonymous</Tab>
					<Tab>Editors</Tab>
				</Tab.Group>
			</Bar.Item>
			<Bar.Item verticalAlign='middle'>
				<Button>Middle</Button>
			</Bar.Item>
			<Bar.Item verticalAlign='top'>
				<Button>Top</Button>
			</Bar.Item>
		</AppBar>
	],
	className: 'dark-theme'
}
