import * as React from 'react';
import List from '../components/list/List';
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
			<List.Item>single item</List.Item>
		</List>
	]
}

export const SelectableHover = DivTemplate.bind({});
SelectableHover.args = {
	children: [
		<List selectable>
			<List.Item className='hover'>single item</List.Item>
		</List>
	]
}


export const SelectableSelected = DivTemplate.bind({});
SelectableSelected.args = {
	children: [
		<List selectable>
			<List.Item className='selected'>single item</List.Item>
		</List>
	]
}

export const SelectableSelectedHover = DivTemplate.bind({});
SelectableSelectedHover.args = {
	children: [
		<List selectable>
			<List.Item className='hover selected'>single item</List.Item>
		</List>
	]
}

export const SelectableFocus = DivTemplate.bind({});
SelectableFocus.args = {
	children: [
		<List selectable>
			<List.Item className='focus'>single item</List.Item>
		</List>
	]
}

export const SelectableFocusHover = DivTemplate.bind({});
SelectableFocusHover.args = {
	children: [
		<List selectable>
			<List.Item className='focus hover'>single item</List.Item>
		</List>
	]
}

export const SelectableSelectedFocus = DivTemplate.bind({});
SelectableSelectedFocus.args = {
	children: [
		<List selectable>
			<List.Item className='focus selected'>single item</List.Item>
		</List>
	]
}

export const SelectableSelectedFocusHover = DivTemplate.bind({});
SelectableSelectedFocusHover.args = {
	children: [
		<List selectable>
			<List.Item className='focus hover selected'>single item</List.Item>
		</List>
	]
}

export const Shades = DivTemplate.bind({});
Shades.storyName = 'Light mode (shades)'
Shades.args = {
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
DarkTheme.storyName = 'Dark mode (tints)'
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
	className: 'enonic dark-theme',
	style: {
		padding: '10px'
	}
}
