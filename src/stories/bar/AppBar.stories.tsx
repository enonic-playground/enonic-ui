import * as React from 'react';
import {
	AppBar as AppBarComponent,
	Bar,
} from '../../components/bar/Bar';
import { Button } from '../../components/button/Button';
import { Span } from '../../components/Span';
import { Svg } from '../../components/Svg';
import { Tab } from '../../components/tab/Tab';
import { widthFromHeight } from '../../utils/widthFromHeight';

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
		</Bar.Item>,
		<Bar.Item verticalAlign='middle'>
			<Span style={{
				fontSize: 15
			}} uppercase>Users</Span>
		</Bar.Item>,
		// <Bar.Item verticalAlign='bottom'>
		// 	<Tab.Group style={{
		// 	height: 36
		// 	}}>
		// 		<Tab>Administrator</Tab>
		// 		<Tab active>Anonymous</Tab>
		// 		<Tab>Editors</Tab>
		// 	</Tab.Group>
		// </Bar.Item>,
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
