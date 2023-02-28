import * as React from 'react';

import { Input } from '../../components/form/Input';
import Table from '../../components/table';


export default {
	title: 'Form/Input',
	component: Input,
};

const InputTemplate = (args) => <Input {...args} />;
const DivTemplate = (args) => <div {...args} />;

export const Normal = InputTemplate.bind({});
Normal.args = {};

export const Hover = DivTemplate.bind({});
Hover.args = {
	children: [
		<Input className='hover' placeholder="Placeholder"/>,
		<Input className='hover' icon='search' placeholder="Placeholder"/>,
		<Input className='hover' icon='search' iconPosition='left' placeholder="Placeholder"/>
	]
};

export const Focus = DivTemplate.bind({});
Focus.args = {
	children: [
		<Input className='focus' placeholder="Placeholder"/>,
		<Input className='focus' icon='search' placeholder="Placeholder"/>,
		<Input className='focus' icon='search' iconPosition='left' placeholder="Placeholder"/>
	]
};

// Stretch only works when using Form.Input
// export const Stretch = DivTemplate.bind({});
// Stretch.args = {
// 	children: [
// 		<Input stretch/>,
// 	]
// };

export const Placeholder = DivTemplate.bind({});
Placeholder.args = {
	children: [
		<Input placeholder='Please fill me in'/>,
	]
};

export const Icons = DivTemplate.bind({});
Icons.args = {
	children: [
		<Input icon='search' placeholder='Search...'/>,
		<Input icon='search' iconPosition='left' placeholder='Search...'/>,
	]
};

export const Disabled = DivTemplate.bind({});
Disabled.args = {
	children: [
		<Input disabled/>,
		<Input disabled icon='search'/>,
		<Input disabled icon='search' iconPosition='left'/>
	]
};

export const Error = DivTemplate.bind({});
Error.args = {
	children: [
		<div>
			<Input error placeholder='Placeholder'/>
			<Input error icon='search' placeholder='Placeholder'/>
			<Input error icon='search' iconPosition='left' placeholder='Placeholder'/>
		</div>,
		<div>
			<Input error="Required" placeholder='Placeholder'/>
			<Input error="Required" icon='search' placeholder='Placeholder'/>
			<Input error="Required" icon='search' iconPosition='left' placeholder='Placeholder'/>
		</div>

	]
};

export const Interactions = DivTemplate.bind({});
Interactions.args = {
	children: [
		<Table celled>
			<Table.Body>
				<Table.Row>
					<Table.HeaderCell>disabled</Table.HeaderCell>
					<Table.Cell><Input disabled icon='search' placeholder='Search...'/></Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.HeaderCell></Table.HeaderCell>
					<Table.Cell><Input icon='search' placeholder='Search...'/></Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.HeaderCell>hover</Table.HeaderCell>
					<Table.Cell><Input className='hover' icon='search' placeholder='Search...'/></Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.HeaderCell>focus</Table.HeaderCell>
					<Table.Cell><Input className='focus' icon='search' placeholder='Search...'/></Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.HeaderCell>focus hover</Table.HeaderCell>
					<Table.Cell><Input className='focus hover' icon='search' placeholder='Search...'/></Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.HeaderCell>error</Table.HeaderCell>
					<Table.Cell><Input error icon='search' placeholder='Search...'/></Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.HeaderCell>error hover</Table.HeaderCell>
					<Table.Cell><Input className='hover' error icon='search' placeholder='Search...'/></Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.HeaderCell>error focus</Table.HeaderCell>
					<Table.Cell><Input className='focus' error icon='search' placeholder='Search...'/></Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.HeaderCell>error</Table.HeaderCell>
					<Table.Cell><Input error="Error message" icon='search' placeholder='Search...'/></Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.HeaderCell>error hover</Table.HeaderCell>
					<Table.Cell><Input className='hover' error="Error message" icon='search' placeholder='Search...'/></Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.HeaderCell>error focus</Table.HeaderCell>
					<Table.Cell><Input className='focus' error="Error message" icon='search' placeholder='Search...'/></Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table>
	],
}

export const DarkTheme = DivTemplate.bind({});
DarkTheme.args = {
	children: [
		<Table celled>
			<Table.Body>
				<Table.Row>
					<Table.HeaderCell>disabled</Table.HeaderCell>
					<Table.Cell><Input disabled icon='search' placeholder='Search...'/></Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.HeaderCell></Table.HeaderCell>
					<Table.Cell><Input icon='search' placeholder='Search...'/></Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.HeaderCell>hover</Table.HeaderCell>
					<Table.Cell><Input className='hover' icon='search' placeholder='Search...'/></Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.HeaderCell>focus</Table.HeaderCell>
					<Table.Cell><Input className='focus' icon='search' placeholder='Search...'/></Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.HeaderCell>focus hover</Table.HeaderCell>
					<Table.Cell><Input className='focus hover' icon='search' placeholder='Search...'/></Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.HeaderCell>error</Table.HeaderCell>
					<Table.Cell><Input error icon='search' placeholder='Search...'/></Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.HeaderCell>error hover</Table.HeaderCell>
					<Table.Cell><Input className='hover' error icon='search' placeholder='Search...'/></Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.HeaderCell>error focus</Table.HeaderCell>
					<Table.Cell><Input className='focus' error icon='search' placeholder='Search...'/></Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.HeaderCell>error</Table.HeaderCell>
					<Table.Cell><Input error="Error message" icon='search' placeholder='Search...'/></Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.HeaderCell>error hover</Table.HeaderCell>
					<Table.Cell><Input className='hover' error="Error message" icon='search' placeholder='Search...'/></Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.HeaderCell>error focus</Table.HeaderCell>
					<Table.Cell><Input className='focus' error="Error message" icon='search' placeholder='Search...'/></Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table>
	],
	className: 'enonic dark-theme',
	style: {
		padding: '20px 30px'
	}
}
