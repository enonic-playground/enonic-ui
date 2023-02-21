import './style/index.sass';
import * as React from 'react';
import {
	AppBar, Aside, Bar, Button, Group, Header, Icon, Main, Span, Svg, ToolBar
} from './components';
import useTheme from './hooks/useTheme';


export default function App() {
	const {theme, toggleTheme} = useTheme();
	return (
		<>
			<AppBar shade='high' style={{
				height: '44px'
			}}>
				<Bar.Item
					style={{
						marginLeft: 10
					}}
					verticalAlign="middle"
				>
					<Svg
						height={25}
						name="users_404x404"
						width={25}
					/>
				</Bar.Item>
				<Bar.Item verticalAlign="middle">
					<Span
						style={{
							fontSize: 15
						}}
						uppercase
					>
						Users
					</Span>
				</Bar.Item>
				<Bar.Item verticalAlign="middle">
					<Button
						onClick={toggleTheme}
						transparent
					>
						{theme === 'light-theme' ? 'Go dark' : 'Go light'}
					</Button>
				</Bar.Item>
			</AppBar>
			<ToolBar
				shade='low'
				style={{
					height: '39px'
				}}
			>
				<Button transparent>
					<Icon name="search"/>
				</Button>
				<Button transparent>
					New
				</Button>
				<Button transparent>
					Edit
				</Button>
				<Button transparent>
					Delete
				</Button>
			</ToolBar>
			<Group as='section'>
				<Aside style={{
					width: '522px'
				}}>
					Something
				</Aside>
				<Main>
					<Header>Hello, world!</Header>
				</Main>
			</Group>
		</>
	);
}
