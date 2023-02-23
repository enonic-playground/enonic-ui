import * as React from 'react';
import { List } from '../components/list/List';
import { Panel } from '../components/Panel';

export default {
	title: 'Modules/List',
	component: List,
	argTypes: {},
};

const DivTemplate = (args) => <div {...args} />;
const ListTemplate = (args) => <List {...args} />;

//@ts-ignore
List.Item.displayName = 'List.Item';


export const Normal = ListTemplate.bind({});
Normal.args = {
	children: [
		<List.Item>first item</List.Item>,
		<List.Item>second item</List.Item>,
		<List.Item>third item</List.Item>
	],
};

export const Selectable = DivTemplate.bind({});
Selectable.args = {
	children: [
		<List selectable>
			<List.Item>first item</List.Item>
			<List.Item>second item</List.Item>
			<List.Item>third item</List.Item>
		</List>,
		<Panel shade='low'>
			<List selectable>
				<List.Item>first item</List.Item>
				<List.Item>second item</List.Item>
				<List.Item>third item</List.Item>
			</List>
		</Panel>,
		<Panel shade='high'>
			<List selectable>
				<List.Item>first item</List.Item>
				<List.Item>second item</List.Item>
				<List.Item>third item</List.Item>
			</List>
		</Panel>
	]
}

export const DarkTheme = DivTemplate.bind({});
DarkTheme.args = {
	children: [
		<List selectable>
			<List.Item>first item</List.Item>
			<List.Item>second item</List.Item>
			<List.Item>third item</List.Item>
		</List>,
		<Panel shade='low'>
			<List selectable>
				<List.Item>first item</List.Item>
				<List.Item>second item</List.Item>
				<List.Item>third item</List.Item>
			</List>
		</Panel>,
		<Panel shade='high'>
			<List selectable>
				<List.Item>first item</List.Item>
				<List.Item>second item</List.Item>
				<List.Item>third item</List.Item>
			</List>
		</Panel>
	],
	className: 'enonic dark-theme'
}
