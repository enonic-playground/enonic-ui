import * as React from 'react';
import {
	AppBar,
	Bar,
	ToolBar,
} from '../../components/bar/Bar';
import { Button } from '../../components/button/Button';
import { Span } from '../../components/Span';
import { Svg } from '../../components/Svg';
import { Tab } from '../../components/tab/Tab';
import { widthFromHeight } from '../../utils/widthFromHeight';

export default {
	title: 'Examples/AppUsers',
	//component: AppBarComponent,
	//argTypes: {},
};

const DivTemplate = (args) => <div {...args} />;

export const Story = DivTemplate.bind({});
Story.args = {
	children: [
		<AppBar style={{
			height: '44px'
		}}>
			<Bar.Item
				style={{
					marginLeft: 10
				}}
				verticalAlign='middle'
			>
				<Svg height={25} name='users_404x404' width={widthFromHeight({
					ascpectRatio: 1,
					newHeight: 25,
				})}/>
			</Bar.Item>
			<Bar.Item verticalAlign='middle'>
				<Span style={{
					fontSize: 15
				}} uppercase>Users</Span>
			</Bar.Item>
			{/* <Bar.Item verticalAlign='bottom'>
				<Tab.Group style={{
				height: 36
				}}>
					<Tab>Administrator</Tab>
					<Tab active>Anonymous</Tab>
					<Tab>Editors</Tab>
				</Tab.Group>
			</Bar.Item> */}
		</AppBar>,
		<ToolBar shade='low'>
			<Button transparent>New</Button>
			<Button transparent>Edit</Button>
			<Button transparent>Delete</Button>
		</ToolBar>
	]
};


export const DarkTheme = DivTemplate.bind({});
DarkTheme.args = {
	children: [
		<AppBar style={{
			height: '44px'
		}}>
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
