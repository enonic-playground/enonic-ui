import * as React from 'react';

import Table from '../components/table';


export default {
	title: 'Modules/Table',
	component: Table,
};

const TableTemplate = (args) => <Table {...args} />;

export const Normal = TableTemplate.bind({});
Normal.args = {
	celled: true,
	children: [
		<Table.Header>
			<Table.Row>
				<Table.HeaderCell>Some<br/>Lines<br/>Of<br/>Text</Table.HeaderCell>
				<Table.HeaderCell>default</Table.HeaderCell>
				<Table.HeaderCell top center>Cell with top center</Table.HeaderCell>
				<Table.HeaderCell bottom right>Cell with bottom right</Table.HeaderCell>
				<Table.HeaderCell></Table.HeaderCell>
			</Table.Row>
		</Table.Header>,
		<Table.Body>
			<Table.Row>
				<Table.HeaderCell>Some<br/>Lines<br/>Of<br/>Text</Table.HeaderCell>
				<Table.Cell>default</Table.Cell>
				<Table.Cell top center>Cell with top center</Table.Cell>
				<Table.Cell bottom right>Cell with bottom right</Table.Cell>
				<Table.HeaderCell>1</Table.HeaderCell>
			</Table.Row>
			<Table.Row top center>
				<Table.HeaderCell>Row<br/>with<br/>top<br/>center</Table.HeaderCell>
				<Table.Cell middle left>Cell with middle left</Table.Cell>
				<Table.Cell>striped</Table.Cell>
				<Table.Cell>striped</Table.Cell>
				<Table.HeaderCell>2</Table.HeaderCell>
			</Table.Row>
			<Table.Row bottom right>
				<Table.HeaderCell>Row<br/>with<br/>bottom<br/>right</Table.HeaderCell>
				<Table.Cell>3A</Table.Cell>
				<Table.Cell>3B</Table.Cell>
				<Table.Cell>3C</Table.Cell>
				<Table.HeaderCell>3</Table.HeaderCell>
			</Table.Row>
			<Table.Row>
				<Table.HeaderCell>4</Table.HeaderCell>
				<Table.Cell>striped</Table.Cell>
				<Table.Cell>striped</Table.Cell>
				<Table.Cell>striped</Table.Cell>
				<Table.HeaderCell>4</Table.HeaderCell>
			</Table.Row>
		</Table.Body>,
		<Table.Footer>
			<Table.Row>
				<Table.HeaderCell></Table.HeaderCell>
				<Table.HeaderCell>A</Table.HeaderCell>
				<Table.HeaderCell>B</Table.HeaderCell>
				<Table.HeaderCell>C</Table.HeaderCell>
				<Table.HeaderCell></Table.HeaderCell>
			</Table.Row>
		</Table.Footer>
	],
	stretch: true,
	striped: true
};

export const UsingDivs = TableTemplate.bind({});
UsingDivs.args = {
	as: 'div',
	celled: true,
	children: [
		<Table.Header as='div'>
			<Table.Row as='div'>
				<Table.HeaderCell as='div'>-</Table.HeaderCell>
				<Table.HeaderCell as='div'>A</Table.HeaderCell>
				<Table.HeaderCell as='div'>B</Table.HeaderCell>
			</Table.Row>
		</Table.Header>,
		<Table.Body as='div'>
			<Table.Row as='div'>
				<Table.HeaderCell as='div'>1</Table.HeaderCell>
				<Table.Cell as='div'>1A</Table.Cell>
				<Table.Cell as='div'>1B</Table.Cell>
			</Table.Row>
			<Table.Row as='div'>
				<Table.HeaderCell as='div'>2</Table.HeaderCell>
				<Table.Cell as='div'>2A</Table.Cell>
				<Table.Cell as='div'>2B</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.HeaderCell as='div'>3</Table.HeaderCell>
				<Table.Cell as='div'>3A</Table.Cell>
				<Table.Cell as='div'>3B</Table.Cell>
			</Table.Row>
		</Table.Body>,
		<Table.Footer as='div'>
			<Table.Row>
				<Table.HeaderCell as='div'></Table.HeaderCell>
				<Table.HeaderCell as='div'>A</Table.HeaderCell>
				<Table.HeaderCell as='div'>B</Table.HeaderCell>
			</Table.Row>
		</Table.Footer>
	],
	stretch: true,
	striped: true
};

export const JustHeader = TableTemplate.bind({});
JustHeader.args = {
	celled: true,
	children: [
		<Table.Header>
			<Table.Row>
				<Table.HeaderCell></Table.HeaderCell>
				<Table.HeaderCell>A</Table.HeaderCell>
				<Table.HeaderCell>B</Table.HeaderCell>
			</Table.Row>
		</Table.Header>
	],
};

export const JustBody = TableTemplate.bind({});
JustBody.args = {
	celled: true,
	children: [
		<Table.Body>
			<Table.Row>
				<Table.HeaderCell></Table.HeaderCell>
				<Table.Cell>A</Table.Cell>
				<Table.Cell>B</Table.Cell>
			</Table.Row>
		</Table.Body>
	],
};

export const JustFooter = TableTemplate.bind({});
JustFooter.args = {
	celled: true,
	children: [
		<Table.Footer>
			<Table.Row>
				<Table.HeaderCell></Table.HeaderCell>
				<Table.HeaderCell>A</Table.HeaderCell>
				<Table.HeaderCell>B</Table.HeaderCell>
			</Table.Row>
		</Table.Footer>
	],
};
