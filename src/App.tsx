import './style/index.sass';
import * as React from 'react';
import {
	AppBar,
	Bar, Button,
	Form,
	Grid,
	Header,
	Icon,
	Main,
	List,
	Panel,
	Resizable,
	Span, Svg,
	ToolBar,
} from './components';
import useTheme from './hooks/useTheme';


export default function App() {
	const {theme, toggleTheme} = useTheme();
	return (
		<Grid
			as='section'
			rows={['44px','39px']}
			viewport
		>
			<AppBar shade='high'>
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
			<Resizable
				as='section'
				style={{
					overflow: 'auto'
				}}
			>
				<Panel style={{
					width: '38%'
				}}>
					<List selectable>
						<List.Item><Form.Checkbox label='Content Studio'/></List.Item>
						<List.Item><Form.Checkbox label='Data Toolbox'/></List.Item>
						<List.Item><Form.Checkbox label='Explorer'/></List.Item>
					</List>
				</Panel>
				<Main
					stretch
				>
					<Header>Main</Header>
					<div>One</div>
					<div>Two</div>
					<div>Three</div>
					<div>Four</div>
					<div>Five</div>
				</Main>
			</Resizable>
		</Grid>
	);
}
