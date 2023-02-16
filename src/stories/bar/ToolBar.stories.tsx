import * as React from 'react';
import {ToolBar as ToolBarComponent} from '../../components/bar/Bar';
import { Button } from '../../components/button/Button';

export default {
	title: 'Modules/Bar/ToolBar',
	component: ToolBarComponent,
	argTypes: {},
};

const DivTemplate = (args) => <div {...args} />;
const ToolBarTemplate = (args) => <ToolBarComponent {...args} />;


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


export const DarkTheme = DivTemplate.bind({});
DarkTheme.args = {
	children: [
		<ToolBar>
			<Button transparent>Save</Button>
			<Button transparent>Delete</Button>
		</ToolBar>
	],
	className: 'dark-theme'
}
