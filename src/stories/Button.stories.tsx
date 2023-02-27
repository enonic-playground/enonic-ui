import * as React from 'react';

import Button from '../components/button';
import { Panel } from '../components/Panel';
import { Svg } from '../components/Svg';
import { widthFromHeight } from '../utils/widthFromHeight';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Elements/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		// backgroundColor: { control: 'color' },
	},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const ButtonTemplate = (args) => <Button {...args} />;
const DivTemplate = (args) => <div {...args} />;

export const Normal = ButtonTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
	children: 'Change password',
	// onClick: () => {},
};

export const WithIcon = DivTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithIcon.args = {
	children: [
		<Button.Group>
			<Button uppercase>
				<Svg color='white' height={25} name='users_404x404' width={widthFromHeight({
					ascpectRatio: 1,
					newHeight: 25,
				})}/>
				Users
			</Button>
			<Button uppercase>
				<Svg color='white' height={25} name='users_512x464' width={widthFromHeight({
					oldHeight: 464,
					oldWidth: 512,
					newHeight: 25,
				})}/>
				Users
			</Button>
		</Button.Group>
	]
};

export const Colors = DivTemplate.bind({});
Colors.args = {
	children: [
		<Panel style={{
			padding: '20px'
		}}>
			<Button.Group>
				<Button>Standard</Button>
				<Button color='white'>White</Button>
				<Button color='red'>Red</Button>
				<Button color='orange'>Orange</Button>
				<Button color='green'>Green</Button>
				<Button color='blue'>Blue</Button>
				<Button color='purple'>Purple</Button>
				<Button color='gray'>Gray</Button>
				<Button color='black'>Black</Button>
			</Button.Group>
		</Panel>,
		<Panel shade='low' style={{
			padding: '20px'
		}}>
			<Button.Group>
				<Button>Standard</Button>
				<Button color='white'>White</Button>
				<Button color='red'>Red</Button>
				<Button color='orange'>Orange</Button>
				<Button color='green'>Green</Button>
				<Button color='blue'>Blue</Button>
				<Button color='purple'>Purple</Button>
				<Button color='gray'>Gray</Button>
				<Button color='black'>Black</Button>
			</Button.Group>
		</Panel>,
		<Panel shade='high' style={{
			padding: '20px'
		}}>
			<Button.Group>
				<Button>Standard</Button>
				<Button color='white'>White</Button>
				<Button color='red'>Red</Button>
				<Button color='orange'>Orange</Button>
				<Button color='green'>Green</Button>
				<Button color='blue'>Blue</Button>
				<Button color='purple'>Purple</Button>
				<Button color='gray'>Gray</Button>
				<Button color='black'>Black</Button>
			</Button.Group>
		</Panel>
	]
};

export const TransparentColors = DivTemplate.bind({});
TransparentColors.args = {
	children: [
		<Panel style={{
			padding: '20px'
		}}>
			<Button.Group>
				<Button transparent>Standard</Button>
				<Button color='white' transparent>White</Button>
				<Button color='red' transparent>Red</Button>
				<Button color='orange' transparent>Orange</Button>
				<Button color='green' transparent>Green</Button>
				<Button color='blue' transparent>Blue</Button>
				<Button color='purple' transparent>Purple</Button>
				<Button color='gray' transparent>Gray</Button>
				<Button color='black' transparent>Black</Button>
			</Button.Group>
		</Panel>,
		<Panel shade='low' style={{
			padding: '20px'
		}}>
			<Button.Group>
				<Button transparent>Standard</Button>
				<Button color='white' transparent>White</Button>
				<Button color='red' transparent>Red</Button>
				<Button color='orange' transparent>Orange</Button>
				<Button color='green' transparent>Green</Button>
				<Button color='blue' transparent>Blue</Button>
				<Button color='purple' transparent>Purple</Button>
				<Button color='gray' transparent>Gray</Button>
				<Button color='black' transparent>Black</Button>
			</Button.Group>
		</Panel>,
		<Panel shade='high' style={{
			padding: '20px'
		}}>
			<Button.Group>
				<Button transparent>Standard</Button>
				<Button color='white' transparent>White</Button>
				<Button color='red' transparent>Red</Button>
				<Button color='orange' transparent>Orange</Button>
				<Button color='green' transparent>Green</Button>
				<Button color='blue' transparent>Blue</Button>
				<Button color='purple' transparent>Purple</Button>
				<Button color='gray' transparent>Gray</Button>
				<Button color='black' transparent>Black</Button>
			</Button.Group>
		</Panel>
	]
};

export const DarkTheme = DivTemplate.bind({});
DarkTheme.args = {
	children: [
		<Panel style={{
			padding: '20px'
		}}>
			<Button.Group style={{
				marginBottom: '20px'
			}}>
				<Button>Standard</Button>
				<Button color='white'>White</Button>
				<Button color='red'>Red</Button>
				<Button color='orange'>Orange</Button>
				<Button color='green'>Green</Button>
				<Button color='blue'>Blue</Button>
				<Button color='purple'>Purple</Button>
				<Button color='gray'>Gray</Button>
				<Button color='black'>Black</Button>
			</Button.Group>
			<Button.Group>
				<Button transparent>Standard</Button>
				<Button color='white' transparent>White</Button>
				<Button color='red' transparent>Red</Button>
				<Button color='orange' transparent>Orange</Button>
				<Button color='green' transparent>Green</Button>
				<Button color='blue' transparent>Blue</Button>
				<Button color='purple' transparent>Purple</Button>
				<Button color='gray' transparent>Gray</Button>
				<Button color='black' transparent>Black</Button>
			</Button.Group>
		</Panel>,
		<Panel shade='low' style={{
			padding: '20px'
		}}>
			<Button.Group style={{
				marginBottom: '20px'
			}}>
				<Button>Standard</Button>
				<Button color='white'>White</Button>
				<Button color='red'>Red</Button>
				<Button color='orange'>Orange</Button>
				<Button color='green'>Green</Button>
				<Button color='blue'>Blue</Button>
				<Button color='purple'>Purple</Button>
				<Button color='gray'>Gray</Button>
				<Button color='black'>Black</Button>
			</Button.Group>
			<Button.Group>
				<Button transparent>Standard</Button>
				<Button color='white' transparent>White</Button>
				<Button color='red' transparent>Red</Button>
				<Button color='orange' transparent>Orange</Button>
				<Button color='green' transparent>Green</Button>
				<Button color='blue' transparent>Blue</Button>
				<Button color='purple' transparent>Purple</Button>
				<Button color='gray' transparent>Gray</Button>
				<Button color='black' transparent>Black</Button>
			</Button.Group>
		</Panel>,
		<Panel shade='high' style={{
			padding: '20px'
		}}>
			<Button.Group style={{
				marginBottom: '20px'
			}}>
				<Button>Standard</Button>
				<Button color='white'>White</Button>
				<Button color='red'>Red</Button>
				<Button color='orange'>Orange</Button>
				<Button color='green'>Green</Button>
				<Button color='blue'>Blue</Button>
				<Button color='purple'>Purple</Button>
				<Button color='gray'>Gray</Button>
				<Button color='black'>Black</Button>
			</Button.Group>
			<Button.Group>
				<Button transparent>Standard</Button>
				<Button color='white' transparent>White</Button>
				<Button color='red' transparent>Red</Button>
				<Button color='orange' transparent>Orange</Button>
				<Button color='green' transparent>Green</Button>
				<Button color='blue' transparent>Blue</Button>
				<Button color='purple' transparent>Purple</Button>
				<Button color='gray' transparent>Gray</Button>
				<Button color='black' transparent>Black</Button>
			</Button.Group>
		</Panel>
	],
	className: 'enonic dark-theme',
	style: {
		padding: '20px 30px'
	}
}

export const Interactions = DivTemplate.bind({});
Interactions.args = {
	children: [
		<table style={{
			textAlign: 'center',
			width: '100%'
		}}>
			<tbody>
				<tr>
					<th>disabled</th>
					<td><Button content='Text' disabled/></td>
					<td><Button color='white' content='White' disabled/></td>
					<td><Button color='red' content='Red' disabled/></td>
					<td><Button color='orange' content='Orange' disabled/></td>
					<td><Button color='green' content='Green' disabled/></td>
					<td><Button color='blue' content='Blue' disabled/></td>
					<td><Button color='purple' content='Purple' disabled/></td>
					<td><Button color='gray' content='Gray' disabled/></td>
					<td><Button color='black' content='Black' disabled/></td>
				</tr>
				<tr>
					<th>-</th>
					<td><Button content='Text'/></td>
					<td><Button color='white' content='White'/></td>
					<td><Button color='red' content='Red'/></td>
					<td><Button color='orange' content='Orange'/></td>
					<td><Button color='green' content='Green'/></td>
					<td><Button color='blue' content='Blue'/></td>
					<td><Button color='purple' content='Purple'/></td>
					<td><Button color='gray' content='Gray'/></td>
					<td><Button color='black' content='Black'/></td>
				</tr>
				<tr>
					<th>hover</th>
					<td><Button className='hover' content='Text'/></td>
					<td><Button className='hover' color='white' content='White'/></td>
					<td><Button className='hover' color='red' content='Red'/></td>
					<td><Button className='hover' color='orange' content='Orange'/></td>
					<td><Button className='hover' color='green' content='Green'/></td>
					<td><Button className='hover' color='blue' content='Blue'/></td>
					<td><Button className='hover' color='purple' content='Purple'/></td>
					<td><Button className='hover' color='gray' content='Gray'/></td>
					<td><Button className='hover' color='black' content='Black'/></td>
				</tr>
				<tr>
					<th>active</th>
					<td><Button className='active' content='Text'/></td>
					<td><Button className='active' color='white' content='White'/></td>
					<td><Button className='active' color='red' content='Red'/></td>
					<td><Button className='active' color='orange' content='Orange'/></td>
					<td><Button className='active' color='green' content='Green'/></td>
					<td><Button className='active' color='blue' content='Blue'/></td>
					<td><Button className='active' color='purple' content='Purple'/></td>
					<td><Button className='active' color='gray' content='Gray'/></td>
					<td><Button className='active' color='black' content='Black'/></td>
				</tr>
				<tr>
					<th>focus</th>
					<td><Button className='focus' content='Text'/></td>
					<td><Button className='focus' color='white' content='White'/></td>
					<td><Button className='focus' color='red' content='Red'/></td>
					<td><Button className='focus' color='orange' content='Orange'/></td>
					<td><Button className='focus' color='green' content='Green'/></td>
					<td><Button className='focus' color='blue' content='Blue'/></td>
					<td><Button className='focus' color='purple' content='Purple'/></td>
					<td><Button className='focus' color='gray' content='Gray'/></td>
					<td><Button className='focus' color='black' content='Black'/></td>
				</tr>
				<tr>
					<th>focus active</th>
					<td><Button className='active focus' content='Text'/></td>
					<td><Button className='active focus' color='white' content='White'/></td>
					<td><Button className='active focus' color='red' content='Red'/></td>
					<td><Button className='active focus' color='orange' content='Orange'/></td>
					<td><Button className='active focus' color='green' content='Green'/></td>
					<td><Button className='active focus' color='blue' content='Blue'/></td>
					<td><Button className='active focus' color='purple' content='Purple'/></td>
					<td><Button className='active focus' color='gray' content='Gray'/></td>
					<td><Button className='active focus' color='black' content='Black'/></td>
				</tr>
			</tbody>
		</table>,
		<Panel shade='low'>
			<table style={{
				textAlign: 'center',
				width: '100%'
			}}>
				<tbody>
					<tr>
						<th>disabled</th>
						<td><Button content='Text' disabled/></td>
						<td><Button color='white' content='White' disabled/></td>
						<td><Button color='red' content='Red' disabled/></td>
						<td><Button color='orange' content='Orange' disabled/></td>
						<td><Button color='green' content='Green' disabled/></td>
						<td><Button color='blue' content='Blue' disabled/></td>
						<td><Button color='purple' content='Purple' disabled/></td>
						<td><Button color='gray' content='Gray' disabled/></td>
						<td><Button color='black' content='Black' disabled/></td>
					</tr>
					<tr>
						<th>-</th>
						<td><Button content='Text'/></td>
						<td><Button color='white' content='White'/></td>
						<td><Button color='red' content='Red'/></td>
						<td><Button color='orange' content='Orange'/></td>
						<td><Button color='green' content='Green'/></td>
						<td><Button color='blue' content='Blue'/></td>
						<td><Button color='purple' content='Purple'/></td>
						<td><Button color='gray' content='Gray'/></td>
						<td><Button color='black' content='Black'/></td>
					</tr>
					<tr>
						<th>hover</th>
						<td><Button className='hover' content='Text'/></td>
						<td><Button className='hover' color='white' content='White'/></td>
						<td><Button className='hover' color='red' content='Red'/></td>
						<td><Button className='hover' color='orange' content='Orange'/></td>
						<td><Button className='hover' color='green' content='Green'/></td>
						<td><Button className='hover' color='blue' content='Blue'/></td>
						<td><Button className='hover' color='purple' content='Purple'/></td>
						<td><Button className='hover' color='gray' content='Gray'/></td>
						<td><Button className='hover' color='black' content='Black'/></td>
					</tr>
					<tr>
						<th>active</th>
						<td><Button className='active' content='Text'/></td>
						<td><Button className='active' color='white' content='White'/></td>
						<td><Button className='active' color='red' content='Red'/></td>
						<td><Button className='active' color='orange' content='Orange'/></td>
						<td><Button className='active' color='green' content='Green'/></td>
						<td><Button className='active' color='blue' content='Blue'/></td>
						<td><Button className='active' color='purple' content='Purple'/></td>
						<td><Button className='active' color='gray' content='Gray'/></td>
						<td><Button className='active' color='black' content='Black'/></td>
					</tr>
					<tr>
						<th>focus</th>
						<td><Button className='focus' content='Text'/></td>
						<td><Button className='focus' color='white' content='White'/></td>
						<td><Button className='focus' color='red' content='Red'/></td>
						<td><Button className='focus' color='orange' content='Orange'/></td>
						<td><Button className='focus' color='green' content='Green'/></td>
						<td><Button className='focus' color='blue' content='Blue'/></td>
						<td><Button className='focus' color='purple' content='Purple'/></td>
						<td><Button className='focus' color='gray' content='Gray'/></td>
						<td><Button className='focus' color='black' content='Black'/></td>
					</tr>
					<tr>
						<th>focus active</th>
						<td><Button className='active focus' content='Text'/></td>
						<td><Button className='active focus' color='white' content='White'/></td>
						<td><Button className='active focus' color='red' content='Red'/></td>
						<td><Button className='active focus' color='orange' content='Orange'/></td>
						<td><Button className='active focus' color='green' content='Green'/></td>
						<td><Button className='active focus' color='blue' content='Blue'/></td>
						<td><Button className='active focus' color='purple' content='Purple'/></td>
						<td><Button className='active focus' color='gray' content='Gray'/></td>
						<td><Button className='active focus' color='black' content='Black'/></td>
					</tr>
				</tbody>
			</table>
		</Panel>,
		<Panel shade='high'>
		<table style={{
			textAlign: 'center',
			width: '100%'
		}}>
			<tbody>
				<tr>
					<th>disabled</th>
					<td><Button content='Text' disabled/></td>
					<td><Button color='white' content='White' disabled/></td>
					<td><Button color='red' content='Red' disabled/></td>
					<td><Button color='orange' content='Orange' disabled/></td>
					<td><Button color='green' content='Green' disabled/></td>
					<td><Button color='blue' content='Blue' disabled/></td>
					<td><Button color='purple' content='Purple' disabled/></td>
					<td><Button color='gray' content='Gray' disabled/></td>
					<td><Button color='black' content='Black' disabled/></td>
				</tr>
				<tr>
					<th>-</th>
					<td><Button content='Text'/></td>
					<td><Button color='white' content='White'/></td>
					<td><Button color='red' content='Red'/></td>
					<td><Button color='orange' content='Orange'/></td>
					<td><Button color='green' content='Green'/></td>
					<td><Button color='blue' content='Blue'/></td>
					<td><Button color='purple' content='Purple'/></td>
					<td><Button color='gray' content='Gray'/></td>
					<td><Button color='black' content='Black'/></td>
				</tr>
				<tr>
					<th>hover</th>
					<td><Button className='hover' content='Text'/></td>
					<td><Button className='hover' color='white' content='White'/></td>
					<td><Button className='hover' color='red' content='Red'/></td>
					<td><Button className='hover' color='orange' content='Orange'/></td>
					<td><Button className='hover' color='green' content='Green'/></td>
					<td><Button className='hover' color='blue' content='Blue'/></td>
					<td><Button className='hover' color='purple' content='Purple'/></td>
					<td><Button className='hover' color='gray' content='Gray'/></td>
					<td><Button className='hover' color='black' content='Black'/></td>
				</tr>
				<tr>
					<th>active</th>
					<td><Button className='active' content='Text'/></td>
					<td><Button className='active' color='white' content='White'/></td>
					<td><Button className='active' color='red' content='Red'/></td>
					<td><Button className='active' color='orange' content='Orange'/></td>
					<td><Button className='active' color='green' content='Green'/></td>
					<td><Button className='active' color='blue' content='Blue'/></td>
					<td><Button className='active' color='purple' content='Purple'/></td>
					<td><Button className='active' color='gray' content='Gray'/></td>
					<td><Button className='active' color='black' content='Black'/></td>
				</tr>
				<tr>
					<th>focus</th>
					<td><Button className='focus' content='Text'/></td>
					<td><Button className='focus' color='white' content='White'/></td>
					<td><Button className='focus' color='red' content='Red'/></td>
					<td><Button className='focus' color='orange' content='Orange'/></td>
					<td><Button className='focus' color='green' content='Green'/></td>
					<td><Button className='focus' color='blue' content='Blue'/></td>
					<td><Button className='focus' color='purple' content='Purple'/></td>
					<td><Button className='focus' color='gray' content='Gray'/></td>
					<td><Button className='focus' color='black' content='Black'/></td>
				</tr>
				<tr>
					<th>focus active</th>
					<td><Button className='active focus' content='Text'/></td>
					<td><Button className='active focus' color='white' content='White'/></td>
					<td><Button className='active focus' color='red' content='Red'/></td>
					<td><Button className='active focus' color='orange' content='Orange'/></td>
					<td><Button className='active focus' color='green' content='Green'/></td>
					<td><Button className='active focus' color='blue' content='Blue'/></td>
					<td><Button className='active focus' color='purple' content='Purple'/></td>
					<td><Button className='active focus' color='gray' content='Gray'/></td>
					<td><Button className='active focus' color='black' content='Black'/></td>
				</tr>
			</tbody>
		</table>
	</Panel>
	]
};

export const TransparentInteractions = DivTemplate.bind({});
TransparentInteractions.args = {
	children: [
		<table style={{
			textAlign: 'center',
			width: '100%'
		}}>
			<tbody>
				<tr>
					<th>disabled</th>
					<td><Button content='Text' disabled transparent/></td>
					<td><Button color='white' content='White' disabled transparent/></td>
					<td><Button color='red' content='Red' disabled transparent/></td>
					<td><Button color='orange' content='Orange' disabled transparent/></td>
					<td><Button color='green' content='Green' disabled transparent/></td>
					<td><Button color='blue' content='Blue' disabled transparent/></td>
					<td><Button color='purple' content='Purple' disabled transparent/></td>
					<td><Button color='gray' content='Gray' disabled transparent/></td>
					<td><Button color='black' content='Black' disabled transparent/></td>
				</tr>
				<tr>
					<th>-</th>
					<td><Button content='Text' transparent/></td>
					<td><Button color='white' content='White' transparent/></td>
					<td><Button color='red' content='Red' transparent/></td>
					<td><Button color='orange' content='Orange' transparent/></td>
					<td><Button color='green' content='Green' transparent/></td>
					<td><Button color='blue' content='Blue' transparent/></td>
					<td><Button color='purple' content='Purple' transparent/></td>
					<td><Button color='gray' content='Gray' transparent/></td>
					<td><Button color='black' content='Black' transparent/></td>
				</tr>
				<tr>
					<th>hover</th>
					<td><Button className='hover' content='Text' transparent/></td>
					<td><Button className='hover' color='white' content='White' transparent/></td>
					<td><Button className='hover' color='red' content='Red' transparent/></td>
					<td><Button className='hover' color='orange' content='Orange' transparent/></td>
					<td><Button className='hover' color='green' content='Green' transparent/></td>
					<td><Button className='hover' color='blue' content='Blue' transparent/></td>
					<td><Button className='hover' color='purple' content='Purple' transparent/></td>
					<td><Button className='hover' color='gray' content='Gray' transparent/></td>
					<td><Button className='hover' color='black' content='Black' transparent/></td>
				</tr>
				<tr>
					<th>active</th>
					<td><Button className='active' content='Text' transparent/></td>
					<td><Button className='active' color='white' content='White' transparent/></td>
					<td><Button className='active' color='red' content='Red' transparent/></td>
					<td><Button className='active' color='orange' content='Orange' transparent/></td>
					<td><Button className='active' color='green' content='Green' transparent/></td>
					<td><Button className='active' color='blue' content='Blue' transparent/></td>
					<td><Button className='active' color='purple' content='Purple' transparent/></td>
					<td><Button className='active' color='gray' content='Gray' transparent/></td>
					<td><Button className='active' color='black' content='Black' transparent/></td>
				</tr>
				<tr>
					<th>focus</th>
					<td><Button className='focus' content='Text' transparent/></td>
					<td><Button className='focus' color='white' content='White' transparent/></td>
					<td><Button className='focus' color='red' content='Red' transparent/></td>
					<td><Button className='focus' color='orange' content='Orange' transparent/></td>
					<td><Button className='focus' color='green' content='Green' transparent/></td>
					<td><Button className='focus' color='blue' content='Blue' transparent/></td>
					<td><Button className='focus' color='purple' content='Purple' transparent/></td>
					<td><Button className='focus' color='gray' content='Gray' transparent/></td>
					<td><Button className='focus' color='black' content='Black' transparent/></td>
				</tr>
				<tr>
					<th>focus active</th>
					<td><Button className='active focus' content='Text' transparent/></td>
					<td><Button className='active focus' color='white' content='White' transparent/></td>
					<td><Button className='active focus' color='red' content='Red' transparent/></td>
					<td><Button className='active focus' color='orange' content='Orange' transparent/></td>
					<td><Button className='active focus' color='green' content='Green' transparent/></td>
					<td><Button className='active focus' color='blue' content='Blue' transparent/></td>
					<td><Button className='active focus' color='purple' content='Purple' transparent/></td>
					<td><Button className='active focus' color='gray' content='Gray' transparent/></td>
					<td><Button className='active focus' color='black' content='Black' transparent/></td>
				</tr>
			</tbody>
		</table>,
		<Panel shade='low'>
			<table style={{
				textAlign: 'center',
				width: '100%'
			}}>
				<tbody>
					<tr>
						<th>disabled</th>
						<td><Button content='Text' disabled transparent/></td>
						<td><Button color='white' content='White' disabled transparent/></td>
						<td><Button color='red' content='Red' disabled transparent/></td>
						<td><Button color='orange' content='Orange' disabled transparent/></td>
						<td><Button color='green' content='Green' disabled transparent/></td>
						<td><Button color='blue' content='Blue' disabled transparent/></td>
						<td><Button color='purple' content='Purple' disabled transparent/></td>
						<td><Button color='gray' content='Gray' disabled transparent/></td>
						<td><Button color='black' content='Black' disabled transparent/></td>
					</tr>
					<tr>
						<th>-</th>
						<td><Button content='Text' transparent/></td>
						<td><Button color='white' content='White' transparent/></td>
						<td><Button color='red' content='Red' transparent/></td>
						<td><Button color='orange' content='Orange' transparent/></td>
						<td><Button color='green' content='Green' transparent/></td>
						<td><Button color='blue' content='Blue' transparent/></td>
						<td><Button color='purple' content='Purple' transparent/></td>
						<td><Button color='gray' content='Gray' transparent/></td>
						<td><Button color='black' content='Black' transparent/></td>
					</tr>
					<tr>
						<th>hover</th>
						<td><Button className='hover' content='Text' transparent/></td>
						<td><Button className='hover' color='white' content='White' transparent/></td>
						<td><Button className='hover' color='red' content='Red' transparent/></td>
						<td><Button className='hover' color='orange' content='Orange' transparent/></td>
						<td><Button className='hover' color='green' content='Green' transparent/></td>
						<td><Button className='hover' color='blue' content='Blue' transparent/></td>
						<td><Button className='hover' color='purple' content='Purple' transparent/></td>
						<td><Button className='hover' color='gray' content='Gray' transparent/></td>
						<td><Button className='hover' color='black' content='Black' transparent/></td>
					</tr>
					<tr>
						<th>active</th>
						<td><Button className='active' content='Text' transparent/></td>
						<td><Button className='active' color='white' content='White' transparent/></td>
						<td><Button className='active' color='red' content='Red' transparent/></td>
						<td><Button className='active' color='orange' content='Orange' transparent/></td>
						<td><Button className='active' color='green' content='Green' transparent/></td>
						<td><Button className='active' color='blue' content='Blue' transparent/></td>
						<td><Button className='active' color='purple' content='Purple' transparent/></td>
						<td><Button className='active' color='gray' content='Gray' transparent/></td>
						<td><Button className='active' color='black' content='Black' transparent/></td>
					</tr>
					<tr>
						<th>focus</th>
						<td><Button className='focus' content='Text' transparent/></td>
						<td><Button className='focus' color='white' content='White' transparent/></td>
						<td><Button className='focus' color='red' content='Red' transparent/></td>
						<td><Button className='focus' color='orange' content='Orange' transparent/></td>
						<td><Button className='focus' color='green' content='Green' transparent/></td>
						<td><Button className='focus' color='blue' content='Blue' transparent/></td>
						<td><Button className='focus' color='purple' content='Purple' transparent/></td>
						<td><Button className='focus' color='gray' content='Gray' transparent/></td>
						<td><Button className='focus' color='black' content='Black' transparent/></td>
					</tr>
					<tr>
						<th>focus active</th>
						<td><Button className='active focus' content='Text' transparent/></td>
						<td><Button className='active focus' color='white' content='White' transparent/></td>
						<td><Button className='active focus' color='red' content='Red' transparent/></td>
						<td><Button className='active focus' color='orange' content='Orange' transparent/></td>
						<td><Button className='active focus' color='green' content='Green' transparent/></td>
						<td><Button className='active focus' color='blue' content='Blue' transparent/></td>
						<td><Button className='active focus' color='purple' content='Purple' transparent/></td>
						<td><Button className='active focus' color='gray' content='Gray' transparent/></td>
						<td><Button className='active focus' color='black' content='Black' transparent/></td>
					</tr>
				</tbody>
			</table>
		</Panel>,
		<Panel shade='high'>
			<table style={{
				textAlign: 'center',
				width: '100%'
			}}>
				<tbody>
					<tr>
						<th>disabled</th>
						<td><Button content='Text' disabled transparent/></td>
						<td><Button color='white' content='White' disabled transparent/></td>
						<td><Button color='red' content='Red' disabled transparent/></td>
						<td><Button color='orange' content='Orange' disabled transparent/></td>
						<td><Button color='green' content='Green' disabled transparent/></td>
						<td><Button color='blue' content='Blue' disabled transparent/></td>
						<td><Button color='purple' content='Purple' disabled transparent/></td>
						<td><Button color='gray' content='Gray' disabled transparent/></td>
						<td><Button color='black' content='Black' disabled transparent/></td>
					</tr>
					<tr>
						<th>-</th>
						<td><Button content='Text' transparent/></td>
						<td><Button color='white' content='White' transparent/></td>
						<td><Button color='red' content='Red' transparent/></td>
						<td><Button color='orange' content='Orange' transparent/></td>
						<td><Button color='green' content='Green' transparent/></td>
						<td><Button color='blue' content='Blue' transparent/></td>
						<td><Button color='purple' content='Purple' transparent/></td>
						<td><Button color='gray' content='Gray' transparent/></td>
						<td><Button color='black' content='Black' transparent/></td>
					</tr>
					<tr>
						<th>hover</th>
						<td><Button className='hover' content='Text' transparent/></td>
						<td><Button className='hover' color='white' content='White' transparent/></td>
						<td><Button className='hover' color='red' content='Red' transparent/></td>
						<td><Button className='hover' color='orange' content='Orange' transparent/></td>
						<td><Button className='hover' color='green' content='Green' transparent/></td>
						<td><Button className='hover' color='blue' content='Blue' transparent/></td>
						<td><Button className='hover' color='purple' content='Purple' transparent/></td>
						<td><Button className='hover' color='gray' content='Gray' transparent/></td>
						<td><Button className='hover' color='black' content='Black' transparent/></td>
					</tr>
					<tr>
						<th>active</th>
						<td><Button className='active' content='Text' transparent/></td>
						<td><Button className='active' color='white' content='White' transparent/></td>
						<td><Button className='active' color='red' content='Red' transparent/></td>
						<td><Button className='active' color='orange' content='Orange' transparent/></td>
						<td><Button className='active' color='green' content='Green' transparent/></td>
						<td><Button className='active' color='blue' content='Blue' transparent/></td>
						<td><Button className='active' color='purple' content='Purple' transparent/></td>
						<td><Button className='active' color='gray' content='Gray' transparent/></td>
						<td><Button className='active' color='black' content='Black' transparent/></td>
					</tr>
					<tr>
						<th>focus</th>
						<td><Button className='focus' content='Text' transparent/></td>
						<td><Button className='focus' color='white' content='White' transparent/></td>
						<td><Button className='focus' color='red' content='Red' transparent/></td>
						<td><Button className='focus' color='orange' content='Orange' transparent/></td>
						<td><Button className='focus' color='green' content='Green' transparent/></td>
						<td><Button className='focus' color='blue' content='Blue' transparent/></td>
						<td><Button className='focus' color='purple' content='Purple' transparent/></td>
						<td><Button className='focus' color='gray' content='Gray' transparent/></td>
						<td><Button className='focus' color='black' content='Black' transparent/></td>
					</tr>
					<tr>
						<th>focus active</th>
						<td><Button className='active focus' content='Text' transparent/></td>
						<td><Button className='active focus' color='white' content='White' transparent/></td>
						<td><Button className='active focus' color='red' content='Red' transparent/></td>
						<td><Button className='active focus' color='orange' content='Orange' transparent/></td>
						<td><Button className='active focus' color='green' content='Green' transparent/></td>
						<td><Button className='active focus' color='blue' content='Blue' transparent/></td>
						<td><Button className='active focus' color='purple' content='Purple' transparent/></td>
						<td><Button className='active focus' color='gray' content='Gray' transparent/></td>
						<td><Button className='active focus' color='black' content='Black' transparent/></td>
					</tr>
				</tbody>
			</table>
		</Panel>
	]
};

export const DarkModeInteractions = DivTemplate.bind({});
DarkModeInteractions.args = {
	children: [
		<table style={{
			textAlign: 'center',
			width: '100%'
		}}>
			<tbody>
				<tr>
					<th>disabled</th>
					<td><Button content='Text' disabled/></td>
					<td><Button color='white' content='White' disabled/></td>
					<td><Button color='red' content='Red' disabled/></td>
					<td><Button color='orange' content='Orange' disabled/></td>
					<td><Button color='green' content='Green' disabled/></td>
					<td><Button color='blue' content='Blue' disabled/></td>
					<td><Button color='purple' content='Purple' disabled/></td>
					<td><Button color='gray' content='Gray' disabled/></td>
					<td><Button color='black' content='Black' disabled/></td>
				</tr>
				<tr>
					<th>-</th>
					<td><Button content='Text'/></td>
					<td><Button color='white' content='White'/></td>
					<td><Button color='red' content='Red'/></td>
					<td><Button color='orange' content='Orange'/></td>
					<td><Button color='green' content='Green'/></td>
					<td><Button color='blue' content='Blue'/></td>
					<td><Button color='purple' content='Purple'/></td>
					<td><Button color='gray' content='Gray'/></td>
					<td><Button color='black' content='Black'/></td>
				</tr>
				<tr>
					<th>hover</th>
					<td><Button className='hover' content='Text'/></td>
					<td><Button className='hover' color='white' content='White'/></td>
					<td><Button className='hover' color='red' content='Red'/></td>
					<td><Button className='hover' color='orange' content='Orange'/></td>
					<td><Button className='hover' color='green' content='Green'/></td>
					<td><Button className='hover' color='blue' content='Blue'/></td>
					<td><Button className='hover' color='purple' content='Purple'/></td>
					<td><Button className='hover' color='gray' content='Gray'/></td>
					<td><Button className='hover' color='black' content='Black'/></td>
				</tr>
				<tr>
					<th>active</th>
					<td><Button className='active' content='Text'/></td>
					<td><Button className='active' color='white' content='White'/></td>
					<td><Button className='active' color='red' content='Red'/></td>
					<td><Button className='active' color='orange' content='Orange'/></td>
					<td><Button className='active' color='green' content='Green'/></td>
					<td><Button className='active' color='blue' content='Blue'/></td>
					<td><Button className='active' color='purple' content='Purple'/></td>
					<td><Button className='active' color='gray' content='Gray'/></td>
					<td><Button className='active' color='black' content='Black'/></td>
				</tr>
				<tr>
					<th>focus</th>
					<td><Button className='focus' content='Text'/></td>
					<td><Button className='focus' color='white' content='White'/></td>
					<td><Button className='focus' color='red' content='Red'/></td>
					<td><Button className='focus' color='orange' content='Orange'/></td>
					<td><Button className='focus' color='green' content='Green'/></td>
					<td><Button className='focus' color='blue' content='Blue'/></td>
					<td><Button className='focus' color='purple' content='Purple'/></td>
					<td><Button className='focus' color='gray' content='Gray'/></td>
					<td><Button className='focus' color='black' content='Black'/></td>
				</tr>
				<tr>
					<th>focus active</th>
					<td><Button className='active focus' content='Text'/></td>
					<td><Button className='active focus' color='white' content='White'/></td>
					<td><Button className='active focus' color='red' content='Red'/></td>
					<td><Button className='active focus' color='orange' content='Orange'/></td>
					<td><Button className='active focus' color='green' content='Green'/></td>
					<td><Button className='active focus' color='blue' content='Blue'/></td>
					<td><Button className='active focus' color='purple' content='Purple'/></td>
					<td><Button className='active focus' color='gray' content='Gray'/></td>
					<td><Button className='active focus' color='black' content='Black'/></td>
				</tr>
			</tbody>
		</table>,
		<Panel tint='low'>
			<table style={{
				textAlign: 'center',
				width: '100%'
			}}>
				<tbody>
					<tr>
						<th>disabled</th>
						<td><Button content='Text' disabled/></td>
						<td><Button color='white' content='White' disabled/></td>
						<td><Button color='red' content='Red' disabled/></td>
						<td><Button color='orange' content='Orange' disabled/></td>
						<td><Button color='green' content='Green' disabled/></td>
						<td><Button color='blue' content='Blue' disabled/></td>
						<td><Button color='purple' content='Purple' disabled/></td>
						<td><Button color='gray' content='Gray' disabled/></td>
						<td><Button color='black' content='Black' disabled/></td>
					</tr>
					<tr>
						<th>-</th>
						<td><Button content='Text'/></td>
						<td><Button color='white' content='White'/></td>
						<td><Button color='red' content='Red'/></td>
						<td><Button color='orange' content='Orange'/></td>
						<td><Button color='green' content='Green'/></td>
						<td><Button color='blue' content='Blue'/></td>
						<td><Button color='purple' content='Purple'/></td>
						<td><Button color='gray' content='Gray'/></td>
						<td><Button color='black' content='Black'/></td>
					</tr>
					<tr>
						<th>hover</th>
						<td><Button className='hover' content='Text'/></td>
						<td><Button className='hover' color='white' content='White'/></td>
						<td><Button className='hover' color='red' content='Red'/></td>
						<td><Button className='hover' color='orange' content='Orange'/></td>
						<td><Button className='hover' color='green' content='Green'/></td>
						<td><Button className='hover' color='blue' content='Blue'/></td>
						<td><Button className='hover' color='purple' content='Purple'/></td>
						<td><Button className='hover' color='gray' content='Gray'/></td>
						<td><Button className='hover' color='black' content='Black'/></td>
					</tr>
					<tr>
						<th>active</th>
						<td><Button className='active' content='Text'/></td>
						<td><Button className='active' color='white' content='White'/></td>
						<td><Button className='active' color='red' content='Red'/></td>
						<td><Button className='active' color='orange' content='Orange'/></td>
						<td><Button className='active' color='green' content='Green'/></td>
						<td><Button className='active' color='blue' content='Blue'/></td>
						<td><Button className='active' color='purple' content='Purple'/></td>
						<td><Button className='active' color='gray' content='Gray'/></td>
						<td><Button className='active' color='black' content='Black'/></td>
					</tr>
					<tr>
						<th>focus</th>
						<td><Button className='focus' content='Text'/></td>
						<td><Button className='focus' color='white' content='White'/></td>
						<td><Button className='focus' color='red' content='Red'/></td>
						<td><Button className='focus' color='orange' content='Orange'/></td>
						<td><Button className='focus' color='green' content='Green'/></td>
						<td><Button className='focus' color='blue' content='Blue'/></td>
						<td><Button className='focus' color='purple' content='Purple'/></td>
						<td><Button className='focus' color='gray' content='Gray'/></td>
						<td><Button className='focus' color='black' content='Black'/></td>
					</tr>
					<tr>
						<th>focus active</th>
						<td><Button className='active focus' content='Text'/></td>
						<td><Button className='active focus' color='white' content='White'/></td>
						<td><Button className='active focus' color='red' content='Red'/></td>
						<td><Button className='active focus' color='orange' content='Orange'/></td>
						<td><Button className='active focus' color='green' content='Green'/></td>
						<td><Button className='active focus' color='blue' content='Blue'/></td>
						<td><Button className='active focus' color='purple' content='Purple'/></td>
						<td><Button className='active focus' color='gray' content='Gray'/></td>
						<td><Button className='active focus' color='black' content='Black'/></td>
					</tr>
				</tbody>
			</table>
		</Panel>,
		<Panel tint='high'>
			<table style={{
				textAlign: 'center',
				width: '100%'
			}}>
				<tbody>
					<tr>
						<th>disabled</th>
						<td><Button content='Text' disabled/></td>
						<td><Button color='white' content='White' disabled/></td>
						<td><Button color='red' content='Red' disabled/></td>
						<td><Button color='orange' content='Orange' disabled/></td>
						<td><Button color='green' content='Green' disabled/></td>
						<td><Button color='blue' content='Blue' disabled/></td>
						<td><Button color='purple' content='Purple' disabled/></td>
						<td><Button color='gray' content='Gray' disabled/></td>
						<td><Button color='black' content='Black' disabled/></td>
					</tr>
					<tr>
						<th>-</th>
						<td><Button content='Text'/></td>
						<td><Button color='white' content='White'/></td>
						<td><Button color='red' content='Red'/></td>
						<td><Button color='orange' content='Orange'/></td>
						<td><Button color='green' content='Green'/></td>
						<td><Button color='blue' content='Blue'/></td>
						<td><Button color='purple' content='Purple'/></td>
						<td><Button color='gray' content='Gray'/></td>
						<td><Button color='black' content='Black'/></td>
					</tr>
					<tr>
						<th>hover</th>
						<td><Button className='hover' content='Text'/></td>
						<td><Button className='hover' color='white' content='White'/></td>
						<td><Button className='hover' color='red' content='Red'/></td>
						<td><Button className='hover' color='orange' content='Orange'/></td>
						<td><Button className='hover' color='green' content='Green'/></td>
						<td><Button className='hover' color='blue' content='Blue'/></td>
						<td><Button className='hover' color='purple' content='Purple'/></td>
						<td><Button className='hover' color='gray' content='Gray'/></td>
						<td><Button className='hover' color='black' content='Black'/></td>
					</tr>
					<tr>
						<th>active</th>
						<td><Button className='active' content='Text'/></td>
						<td><Button className='active' color='white' content='White'/></td>
						<td><Button className='active' color='red' content='Red'/></td>
						<td><Button className='active' color='orange' content='Orange'/></td>
						<td><Button className='active' color='green' content='Green'/></td>
						<td><Button className='active' color='blue' content='Blue'/></td>
						<td><Button className='active' color='purple' content='Purple'/></td>
						<td><Button className='active' color='gray' content='Gray'/></td>
						<td><Button className='active' color='black' content='Black'/></td>
					</tr>
					<tr>
						<th>focus</th>
						<td><Button className='focus' content='Text'/></td>
						<td><Button className='focus' color='white' content='White'/></td>
						<td><Button className='focus' color='red' content='Red'/></td>
						<td><Button className='focus' color='orange' content='Orange'/></td>
						<td><Button className='focus' color='green' content='Green'/></td>
						<td><Button className='focus' color='blue' content='Blue'/></td>
						<td><Button className='focus' color='purple' content='Purple'/></td>
						<td><Button className='focus' color='gray' content='Gray'/></td>
						<td><Button className='focus' color='black' content='Black'/></td>
					</tr>
					<tr>
						<th>focus active</th>
						<td><Button className='active focus' content='Text'/></td>
						<td><Button className='active focus' color='white' content='White'/></td>
						<td><Button className='active focus' color='red' content='Red'/></td>
						<td><Button className='active focus' color='orange' content='Orange'/></td>
						<td><Button className='active focus' color='green' content='Green'/></td>
						<td><Button className='active focus' color='blue' content='Blue'/></td>
						<td><Button className='active focus' color='purple' content='Purple'/></td>
						<td><Button className='active focus' color='gray' content='Gray'/></td>
						<td><Button className='active focus' color='black' content='Black'/></td>
					</tr>
				</tbody>
			</table>
		</Panel>
	],
	className: 'enonic dark-theme',
	style: {
		padding: '20px 30px'
	}
};

export const DarkModeTransparentInteractions = DivTemplate.bind({});
DarkModeTransparentInteractions.args = {
	children: [
		<table style={{
			textAlign: 'center',
			width: '100%'
		}}>
			<tbody>
				<tr>
					<th>disabled</th>
					<td><Button content='Text' transparent disabled/></td>
					<td><Button color='white' content='White' transparent disabled/></td>
					<td><Button color='red' content='Red' transparent disabled/></td>
					<td><Button color='orange' content='Orange' transparent disabled/></td>
					<td><Button color='green' content='Green' transparent disabled/></td>
					<td><Button color='blue' content='Blue' transparent disabled/></td>
					<td><Button color='purple' content='Purple' transparent disabled/></td>
					<td><Button color='gray' content='Gray' transparent disabled/></td>
					<td><Button color='black' content='Black' transparent disabled/></td>
				</tr>
				<tr>
					<th>-</th>
					<td><Button content='Text' transparent/></td>
					<td><Button color='white' content='White' transparent/></td>
					<td><Button color='red' content='Red' transparent/></td>
					<td><Button color='orange' content='Orange' transparent/></td>
					<td><Button color='green' content='Green' transparent/></td>
					<td><Button color='blue' content='Blue' transparent/></td>
					<td><Button color='purple' content='Purple' transparent/></td>
					<td><Button color='gray' content='Gray' transparent/></td>
					<td><Button color='black' content='Black' transparent/></td>
				</tr>
				<tr>
					<th>hover</th>
					<td><Button className='hover' content='Text' transparent/></td>
					<td><Button className='hover' color='white' content='White' transparent/></td>
					<td><Button className='hover' color='red' content='Red' transparent/></td>
					<td><Button className='hover' color='orange' content='Orange' transparent/></td>
					<td><Button className='hover' color='green' content='Green' transparent/></td>
					<td><Button className='hover' color='blue' content='Blue' transparent/></td>
					<td><Button className='hover' color='purple' content='Purple' transparent/></td>
					<td><Button className='hover' color='gray' content='Gray' transparent/></td>
					<td><Button className='hover' color='black' content='Black' transparent/></td>
				</tr>
				<tr>
					<th>active</th>
					<td><Button className='active' content='Text' transparent/></td>
					<td><Button className='active' color='white' content='White' transparent/></td>
					<td><Button className='active' color='red' content='Red' transparent/></td>
					<td><Button className='active' color='orange' content='Orange' transparent/></td>
					<td><Button className='active' color='green' content='Green' transparent/></td>
					<td><Button className='active' color='blue' content='Blue' transparent/></td>
					<td><Button className='active' color='purple' content='Purple' transparent/></td>
					<td><Button className='active' color='gray' content='Gray' transparent/></td>
					<td><Button className='active' color='black' content='Black' transparent/></td>
				</tr>
				<tr>
					<th>focus</th>
					<td><Button className='focus' content='Text' transparent/></td>
					<td><Button className='focus' color='white' content='White' transparent/></td>
					<td><Button className='focus' color='red' content='Red' transparent/></td>
					<td><Button className='focus' color='orange' content='Orange' transparent/></td>
					<td><Button className='focus' color='green' content='Green' transparent/></td>
					<td><Button className='focus' color='blue' content='Blue' transparent/></td>
					<td><Button className='focus' color='purple' content='Purple' transparent/></td>
					<td><Button className='focus' color='gray' content='Gray' transparent/></td>
					<td><Button className='focus' color='black' content='Black' transparent/></td>
				</tr>
				<tr>
					<th>focus active</th>
					<td><Button className='active focus' content='Text' transparent/></td>
					<td><Button className='active focus' color='white' content='White' transparent/></td>
					<td><Button className='active focus' color='red' content='Red' transparent/></td>
					<td><Button className='active focus' color='orange' content='Orange' transparent/></td>
					<td><Button className='active focus' color='green' content='Green' transparent/></td>
					<td><Button className='active focus' color='blue' content='Blue' transparent/></td>
					<td><Button className='active focus' color='purple' content='Purple' transparent/></td>
					<td><Button className='active focus' color='gray' content='Gray' transparent/></td>
					<td><Button className='active focus' color='black' content='Black' transparent/></td>
				</tr>
			</tbody>
		</table>,
		<Panel tint='low'>
			<table style={{
				textAlign: 'center',
				width: '100%'
			}}>
				<tbody>
					<tr>
						<th>disabled</th>
						<td><Button content='Text' transparent disabled/></td>
						<td><Button color='white' content='White' transparent disabled/></td>
						<td><Button color='red' content='Red' transparent disabled/></td>
						<td><Button color='orange' content='Orange' transparent disabled/></td>
						<td><Button color='green' content='Green' transparent disabled/></td>
						<td><Button color='blue' content='Blue' transparent disabled/></td>
						<td><Button color='purple' content='Purple' transparent disabled/></td>
						<td><Button color='gray' content='Gray' transparent disabled/></td>
						<td><Button color='black' content='Black' transparent disabled/></td>
					</tr>
					<tr>
						<th>-</th>
						<td><Button content='Text' transparent/></td>
						<td><Button color='white' content='White' transparent/></td>
						<td><Button color='red' content='Red' transparent/></td>
						<td><Button color='orange' content='Orange' transparent/></td>
						<td><Button color='green' content='Green' transparent/></td>
						<td><Button color='blue' content='Blue' transparent/></td>
						<td><Button color='purple' content='Purple' transparent/></td>
						<td><Button color='gray' content='Gray' transparent/></td>
						<td><Button color='black' content='Black' transparent/></td>
					</tr>
					<tr>
						<th>hover</th>
						<td><Button className='hover' content='Text' transparent/></td>
						<td><Button className='hover' color='white' content='White' transparent/></td>
						<td><Button className='hover' color='red' content='Red' transparent/></td>
						<td><Button className='hover' color='orange' content='Orange' transparent/></td>
						<td><Button className='hover' color='green' content='Green' transparent/></td>
						<td><Button className='hover' color='blue' content='Blue' transparent/></td>
						<td><Button className='hover' color='purple' content='Purple' transparent/></td>
						<td><Button className='hover' color='gray' content='Gray' transparent/></td>
						<td><Button className='hover' color='black' content='Black' transparent/></td>
					</tr>
					<tr>
						<th>active</th>
						<td><Button className='active' content='Text' transparent/></td>
						<td><Button className='active' color='white' content='White' transparent/></td>
						<td><Button className='active' color='red' content='Red' transparent/></td>
						<td><Button className='active' color='orange' content='Orange' transparent/></td>
						<td><Button className='active' color='green' content='Green' transparent/></td>
						<td><Button className='active' color='blue' content='Blue' transparent/></td>
						<td><Button className='active' color='purple' content='Purple' transparent/></td>
						<td><Button className='active' color='gray' content='Gray' transparent/></td>
						<td><Button className='active' color='black' content='Black' transparent/></td>
					</tr>
					<tr>
						<th>focus</th>
						<td><Button className='focus' content='Text' transparent/></td>
						<td><Button className='focus' color='white' content='White' transparent/></td>
						<td><Button className='focus' color='red' content='Red' transparent/></td>
						<td><Button className='focus' color='orange' content='Orange' transparent/></td>
						<td><Button className='focus' color='green' content='Green' transparent/></td>
						<td><Button className='focus' color='blue' content='Blue' transparent/></td>
						<td><Button className='focus' color='purple' content='Purple' transparent/></td>
						<td><Button className='focus' color='gray' content='Gray' transparent/></td>
						<td><Button className='focus' color='black' content='Black' transparent/></td>
					</tr>
					<tr>
						<th>focus active</th>
						<td><Button className='active focus' content='Text' transparent/></td>
						<td><Button className='active focus' color='white' content='White' transparent/></td>
						<td><Button className='active focus' color='red' content='Red' transparent/></td>
						<td><Button className='active focus' color='orange' content='Orange' transparent/></td>
						<td><Button className='active focus' color='green' content='Green' transparent/></td>
						<td><Button className='active focus' color='blue' content='Blue' transparent/></td>
						<td><Button className='active focus' color='purple' content='Purple' transparent/></td>
						<td><Button className='active focus' color='gray' content='Gray' transparent/></td>
						<td><Button className='active focus' color='black' content='Black' transparent/></td>
					</tr>
				</tbody>
			</table>
		</Panel>,
		<Panel tint='high'>
			<table style={{
				textAlign: 'center',
				width: '100%'
			}}>
				<tbody>
					<tr>
						<th>disabled</th>
						<td><Button content='Text' transparent disabled/></td>
						<td><Button color='white' content='White' transparent disabled/></td>
						<td><Button color='red' content='Red' transparent disabled/></td>
						<td><Button color='orange' content='Orange' transparent disabled/></td>
						<td><Button color='green' content='Green' transparent disabled/></td>
						<td><Button color='blue' content='Blue' transparent disabled/></td>
						<td><Button color='purple' content='Purple' transparent disabled/></td>
						<td><Button color='gray' content='Gray' transparent disabled/></td>
						<td><Button color='black' content='Black' transparent disabled/></td>
					</tr>
					<tr>
						<th>-</th>
						<td><Button content='Text' transparent/></td>
						<td><Button color='white' content='White' transparent/></td>
						<td><Button color='red' content='Red' transparent/></td>
						<td><Button color='orange' content='Orange' transparent/></td>
						<td><Button color='green' content='Green' transparent/></td>
						<td><Button color='blue' content='Blue' transparent/></td>
						<td><Button color='purple' content='Purple' transparent/></td>
						<td><Button color='gray' content='Gray' transparent/></td>
						<td><Button color='black' content='Black' transparent/></td>
					</tr>
					<tr>
						<th>hover</th>
						<td><Button className='hover' content='Text' transparent/></td>
						<td><Button className='hover' color='white' content='White' transparent/></td>
						<td><Button className='hover' color='red' content='Red' transparent/></td>
						<td><Button className='hover' color='orange' content='Orange' transparent/></td>
						<td><Button className='hover' color='green' content='Green' transparent/></td>
						<td><Button className='hover' color='blue' content='Blue' transparent/></td>
						<td><Button className='hover' color='purple' content='Purple' transparent/></td>
						<td><Button className='hover' color='gray' content='Gray' transparent/></td>
						<td><Button className='hover' color='black' content='Black' transparent/></td>
					</tr>
					<tr>
						<th>active</th>
						<td><Button className='active' content='Text' transparent/></td>
						<td><Button className='active' color='white' content='White' transparent/></td>
						<td><Button className='active' color='red' content='Red' transparent/></td>
						<td><Button className='active' color='orange' content='Orange' transparent/></td>
						<td><Button className='active' color='green' content='Green' transparent/></td>
						<td><Button className='active' color='blue' content='Blue' transparent/></td>
						<td><Button className='active' color='purple' content='Purple' transparent/></td>
						<td><Button className='active' color='gray' content='Gray' transparent/></td>
						<td><Button className='active' color='black' content='Black' transparent/></td>
					</tr>
					<tr>
						<th>focus</th>
						<td><Button className='focus' content='Text' transparent/></td>
						<td><Button className='focus' color='white' content='White' transparent/></td>
						<td><Button className='focus' color='red' content='Red' transparent/></td>
						<td><Button className='focus' color='orange' content='Orange' transparent/></td>
						<td><Button className='focus' color='green' content='Green' transparent/></td>
						<td><Button className='focus' color='blue' content='Blue' transparent/></td>
						<td><Button className='focus' color='purple' content='Purple' transparent/></td>
						<td><Button className='focus' color='gray' content='Gray' transparent/></td>
						<td><Button className='focus' color='black' content='Black' transparent/></td>
					</tr>
					<tr>
						<th>focus active</th>
						<td><Button className='active focus' content='Text' transparent/></td>
						<td><Button className='active focus' color='white' content='White' transparent/></td>
						<td><Button className='active focus' color='red' content='Red' transparent/></td>
						<td><Button className='active focus' color='orange' content='Orange' transparent/></td>
						<td><Button className='active focus' color='green' content='Green' transparent/></td>
						<td><Button className='active focus' color='blue' content='Blue' transparent/></td>
						<td><Button className='active focus' color='purple' content='Purple' transparent/></td>
						<td><Button className='active focus' color='gray' content='Gray' transparent/></td>
						<td><Button className='active focus' color='black' content='Black' transparent/></td>
					</tr>
				</tbody>
			</table>
		</Panel>
	],
	className: 'enonic dark-theme',
	style: {
		padding: '20px 30px'
	}
};

export const Disabled = DivTemplate.bind({});
Disabled.args = {
	children: [
		<table style={{
			textAlign: 'center',
			width: '100%'
		}}>
			<tbody>
				<tr>
					<th></th>
					<td><Button content='Text' disabled/></td>
					<td><Button color='white' content='White' disabled/></td>
					<td><Button color='red' content='Red' disabled/></td>
					<td><Button color='orange' content='Orange' disabled/></td>
					<td><Button color='green' content='Green' disabled/></td>
					<td><Button color='blue' content='Blue' disabled/></td>
					<td><Button color='purple' content='Purple' disabled/></td>
					<td><Button color='gray' content='Gray' disabled/></td>
					<td><Button color='black' content='Black' disabled/></td>
				</tr>
				<tr>
					<th>hover</th>
					<td><Button className='hover' content='Text' disabled/></td>
					<td><Button className='hover' color='white' content='White' disabled/></td>
					<td><Button className='hover' color='red' content='Red' disabled/></td>
					<td><Button className='hover' color='orange' content='Orange' disabled/></td>
					<td><Button className='hover' color='green' content='Green' disabled/></td>
					<td><Button className='hover' color='blue' content='Blue' disabled/></td>
					<td><Button className='hover' color='purple' content='Purple' disabled/></td>
					<td><Button className='hover' color='gray' content='Gray' disabled/></td>
					<td><Button className='hover' color='black' content='Black' disabled/></td>
				</tr>
				<tr>
					<th>active</th>
					<td><Button className='active' content='Text' disabled/></td>
					<td><Button className='active' color='white' content='White' disabled/></td>
					<td><Button className='active' color='red' content='Red' disabled/></td>
					<td><Button className='active' color='orange' content='Orange' disabled/></td>
					<td><Button className='active' color='green' content='Green' disabled/></td>
					<td><Button className='active' color='blue' content='Blue' disabled/></td>
					<td><Button className='active' color='purple' content='Purple' disabled/></td>
					<td><Button className='active' color='gray' content='Gray' disabled/></td>
					<td><Button className='active' color='black' content='Black' disabled/></td>
				</tr>
				<tr>
					<th>focus</th>
					<td><Button className='focus' content='Text' disabled/></td>
					<td><Button className='focus' color='white' content='White' disabled/></td>
					<td><Button className='focus' color='red' content='Red' disabled/></td>
					<td><Button className='focus' color='orange' content='Orange' disabled/></td>
					<td><Button className='focus' color='green' content='Green' disabled/></td>
					<td><Button className='focus' color='blue' content='Blue' disabled/></td>
					<td><Button className='focus' color='purple' content='Purple' disabled/></td>
					<td><Button className='focus' color='gray' content='Gray' disabled/></td>
					<td><Button className='focus' color='black' content='Black' disabled/></td>
				</tr>
				<tr>
					<th>focus active</th>
					<td><Button className='active focus' content='Text' disabled/></td>
					<td><Button className='active focus' color='white' content='White' disabled/></td>
					<td><Button className='active focus' color='red' content='Red' disabled/></td>
					<td><Button className='active focus' color='orange' content='Orange' disabled/></td>
					<td><Button className='active focus' color='green' content='Green' disabled/></td>
					<td><Button className='active focus' color='blue' content='Blue' disabled/></td>
					<td><Button className='active focus' color='purple' content='Purple' disabled/></td>
					<td><Button className='active focus' color='gray' content='Gray' disabled/></td>
					<td><Button className='active focus' color='black' content='Black' disabled/></td>
				</tr>
			</tbody>
		</table>,
		<Panel shade='low'>
			<table style={{
				textAlign: 'center',
				width: '100%'
			}}>
				<tbody>
					<tr>
						<th></th>
						<td><Button content='Text' disabled/></td>
						<td><Button color='white' content='White' disabled/></td>
						<td><Button color='red' content='Red' disabled/></td>
						<td><Button color='orange' content='Orange' disabled/></td>
						<td><Button color='green' content='Green' disabled/></td>
						<td><Button color='blue' content='Blue' disabled/></td>
						<td><Button color='purple' content='Purple' disabled/></td>
						<td><Button color='gray' content='Gray' disabled/></td>
						<td><Button color='black' content='Black' disabled/></td>
					</tr>
					<tr>
						<th>hover</th>
						<td><Button className='hover' content='Text' disabled/></td>
						<td><Button className='hover' color='white' content='White' disabled/></td>
						<td><Button className='hover' color='red' content='Red' disabled/></td>
						<td><Button className='hover' color='orange' content='Orange' disabled/></td>
						<td><Button className='hover' color='green' content='Green' disabled/></td>
						<td><Button className='hover' color='blue' content='Blue' disabled/></td>
						<td><Button className='hover' color='purple' content='Purple' disabled/></td>
						<td><Button className='hover' color='gray' content='Gray' disabled/></td>
						<td><Button className='hover' color='black' content='Black' disabled/></td>
					</tr>
					<tr>
						<th>active</th>
						<td><Button className='active' content='Text' disabled/></td>
						<td><Button className='active' color='white' content='White' disabled/></td>
						<td><Button className='active' color='red' content='Red' disabled/></td>
						<td><Button className='active' color='orange' content='Orange' disabled/></td>
						<td><Button className='active' color='green' content='Green' disabled/></td>
						<td><Button className='active' color='blue' content='Blue' disabled/></td>
						<td><Button className='active' color='purple' content='Purple' disabled/></td>
						<td><Button className='active' color='gray' content='Gray' disabled/></td>
						<td><Button className='active' color='black' content='Black' disabled/></td>
					</tr>
					<tr>
						<th>focus</th>
						<td><Button className='focus' content='Text' disabled/></td>
						<td><Button className='focus' color='white' content='White' disabled/></td>
						<td><Button className='focus' color='red' content='Red' disabled/></td>
						<td><Button className='focus' color='orange' content='Orange' disabled/></td>
						<td><Button className='focus' color='green' content='Green' disabled/></td>
						<td><Button className='focus' color='blue' content='Blue' disabled/></td>
						<td><Button className='focus' color='purple' content='Purple' disabled/></td>
						<td><Button className='focus' color='gray' content='Gray' disabled/></td>
						<td><Button className='focus' color='black' content='Black' disabled/></td>
					</tr>
					<tr>
						<th>focus active</th>
						<td><Button className='active focus' content='Text' disabled/></td>
						<td><Button className='active focus' color='white' content='White' disabled/></td>
						<td><Button className='active focus' color='red' content='Red' disabled/></td>
						<td><Button className='active focus' color='orange' content='Orange' disabled/></td>
						<td><Button className='active focus' color='green' content='Green' disabled/></td>
						<td><Button className='active focus' color='blue' content='Blue' disabled/></td>
						<td><Button className='active focus' color='purple' content='Purple' disabled/></td>
						<td><Button className='active focus' color='gray' content='Gray' disabled/></td>
						<td><Button className='active focus' color='black' content='Black' disabled/></td>
					</tr>
				</tbody>
			</table>
		</Panel>,
		<Panel shade='high'>
			<table style={{
				textAlign: 'center',
				width: '100%'
			}}>
				<tbody>
					<tr>
						<th></th>
						<td><Button content='Text' disabled/></td>
						<td><Button color='white' content='White' disabled/></td>
						<td><Button color='red' content='Red' disabled/></td>
						<td><Button color='orange' content='Orange' disabled/></td>
						<td><Button color='green' content='Green' disabled/></td>
						<td><Button color='blue' content='Blue' disabled/></td>
						<td><Button color='purple' content='Purple' disabled/></td>
						<td><Button color='gray' content='Gray' disabled/></td>
						<td><Button color='black' content='Black' disabled/></td>
					</tr>
					<tr>
						<th>hover</th>
						<td><Button className='hover' content='Text' disabled/></td>
						<td><Button className='hover' color='white' content='White' disabled/></td>
						<td><Button className='hover' color='red' content='Red' disabled/></td>
						<td><Button className='hover' color='orange' content='Orange' disabled/></td>
						<td><Button className='hover' color='green' content='Green' disabled/></td>
						<td><Button className='hover' color='blue' content='Blue' disabled/></td>
						<td><Button className='hover' color='purple' content='Purple' disabled/></td>
						<td><Button className='hover' color='gray' content='Gray' disabled/></td>
						<td><Button className='hover' color='black' content='Black' disabled/></td>
					</tr>
					<tr>
						<th>active</th>
						<td><Button className='active' content='Text' disabled/></td>
						<td><Button className='active' color='white' content='White' disabled/></td>
						<td><Button className='active' color='red' content='Red' disabled/></td>
						<td><Button className='active' color='orange' content='Orange' disabled/></td>
						<td><Button className='active' color='green' content='Green' disabled/></td>
						<td><Button className='active' color='blue' content='Blue' disabled/></td>
						<td><Button className='active' color='purple' content='Purple' disabled/></td>
						<td><Button className='active' color='gray' content='Gray' disabled/></td>
						<td><Button className='active' color='black' content='Black' disabled/></td>
					</tr>
					<tr>
						<th>focus</th>
						<td><Button className='focus' content='Text' disabled/></td>
						<td><Button className='focus' color='white' content='White' disabled/></td>
						<td><Button className='focus' color='red' content='Red' disabled/></td>
						<td><Button className='focus' color='orange' content='Orange' disabled/></td>
						<td><Button className='focus' color='green' content='Green' disabled/></td>
						<td><Button className='focus' color='blue' content='Blue' disabled/></td>
						<td><Button className='focus' color='purple' content='Purple' disabled/></td>
						<td><Button className='focus' color='gray' content='Gray' disabled/></td>
						<td><Button className='focus' color='black' content='Black' disabled/></td>
					</tr>
					<tr>
						<th>focus active</th>
						<td><Button className='active focus' content='Text' disabled/></td>
						<td><Button className='active focus' color='white' content='White' disabled/></td>
						<td><Button className='active focus' color='red' content='Red' disabled/></td>
						<td><Button className='active focus' color='orange' content='Orange' disabled/></td>
						<td><Button className='active focus' color='green' content='Green' disabled/></td>
						<td><Button className='active focus' color='blue' content='Blue' disabled/></td>
						<td><Button className='active focus' color='purple' content='Purple' disabled/></td>
						<td><Button className='active focus' color='gray' content='Gray' disabled/></td>
						<td><Button className='active focus' color='black' content='Black' disabled/></td>
					</tr>
				</tbody>
			</table>
		</Panel>
	]
};

export const TransparentDisabled = DivTemplate.bind({});
TransparentDisabled.args = {
	children: [
		<table style={{
			textAlign: 'center',
			width: '100%'
		}}>
			<tbody>
				<tr>
					<th></th>
					<td><Button content='Text' transparent disabled/></td>
					<td><Button color='white' content='White' transparent disabled/></td>
					<td><Button color='red' content='Red' transparent disabled/></td>
					<td><Button color='orange' content='Orange' transparent disabled/></td>
					<td><Button color='green' content='Green' transparent disabled/></td>
					<td><Button color='blue' content='Blue' transparent disabled/></td>
					<td><Button color='purple' content='Purple' transparent disabled/></td>
					<td><Button color='gray' content='Gray' transparent disabled/></td>
					<td><Button color='black' content='Black' transparent disabled/></td>
				</tr>
				<tr>
					<th>hover</th>
					<td><Button className='hover' content='Text' transparent disabled/></td>
					<td><Button className='hover' color='white' content='White' transparent disabled/></td>
					<td><Button className='hover' color='red' content='Red' transparent disabled/></td>
					<td><Button className='hover' color='orange' content='Orange' transparent disabled/></td>
					<td><Button className='hover' color='green' content='Green' transparent disabled/></td>
					<td><Button className='hover' color='blue' content='Blue' transparent disabled/></td>
					<td><Button className='hover' color='purple' content='Purple' transparent disabled/></td>
					<td><Button className='hover' color='gray' content='Gray' transparent disabled/></td>
					<td><Button className='hover' color='black' content='Black' transparent disabled/></td>
				</tr>
				<tr>
					<th>active</th>
					<td><Button className='active' content='Text' transparent disabled/></td>
					<td><Button className='active' color='white' content='White' transparent disabled/></td>
					<td><Button className='active' color='red' content='Red' transparent disabled/></td>
					<td><Button className='active' color='orange' content='Orange' transparent disabled/></td>
					<td><Button className='active' color='green' content='Green' transparent disabled/></td>
					<td><Button className='active' color='blue' content='Blue' transparent disabled/></td>
					<td><Button className='active' color='purple' content='Purple' transparent disabled/></td>
					<td><Button className='active' color='gray' content='Gray' transparent disabled/></td>
					<td><Button className='active' color='black' content='Black' transparent disabled/></td>
				</tr>
				<tr>
					<th>focus</th>
					<td><Button className='focus' content='Text' transparent disabled/></td>
					<td><Button className='focus' color='white' content='White' transparent disabled/></td>
					<td><Button className='focus' color='red' content='Red' transparent disabled/></td>
					<td><Button className='focus' color='orange' content='Orange' transparent disabled/></td>
					<td><Button className='focus' color='green' content='Green' transparent disabled/></td>
					<td><Button className='focus' color='blue' content='Blue' transparent disabled/></td>
					<td><Button className='focus' color='purple' content='Purple' transparent disabled/></td>
					<td><Button className='focus' color='gray' content='Gray' transparent disabled/></td>
					<td><Button className='focus' color='black' content='Black' transparent disabled/></td>
				</tr>
				<tr>
					<th>focus active</th>
					<td><Button className='active focus' content='Text' transparent disabled/></td>
					<td><Button className='active focus' color='white' content='White' transparent disabled/></td>
					<td><Button className='active focus' color='red' content='Red' transparent disabled/></td>
					<td><Button className='active focus' color='orange' content='Orange' transparent disabled/></td>
					<td><Button className='active focus' color='green' content='Green' transparent disabled/></td>
					<td><Button className='active focus' color='blue' content='Blue' transparent disabled/></td>
					<td><Button className='active focus' color='purple' content='Purple' transparent disabled/></td>
					<td><Button className='active focus' color='gray' content='Gray' transparent disabled/></td>
					<td><Button className='active focus' color='black' content='Black' transparent disabled/></td>
				</tr>
			</tbody>
		</table>,
		<Panel shade='low'>
			<table style={{
				textAlign: 'center',
				width: '100%'
			}}>
				<tbody>
					<tr>
						<th></th>
						<td><Button content='Text' transparent disabled/></td>
						<td><Button color='white' content='White' transparent disabled/></td>
						<td><Button color='red' content='Red' transparent disabled/></td>
						<td><Button color='orange' content='Orange' transparent disabled/></td>
						<td><Button color='green' content='Green' transparent disabled/></td>
						<td><Button color='blue' content='Blue' transparent disabled/></td>
						<td><Button color='purple' content='Purple' transparent disabled/></td>
						<td><Button color='gray' content='Gray' transparent disabled/></td>
						<td><Button color='black' content='Black' transparent disabled/></td>
					</tr>
					<tr>
						<th>hover</th>
						<td><Button className='hover' content='Text' transparent disabled/></td>
						<td><Button className='hover' color='white' content='White' transparent disabled/></td>
						<td><Button className='hover' color='red' content='Red' transparent disabled/></td>
						<td><Button className='hover' color='orange' content='Orange' transparent disabled/></td>
						<td><Button className='hover' color='green' content='Green' transparent disabled/></td>
						<td><Button className='hover' color='blue' content='Blue' transparent disabled/></td>
						<td><Button className='hover' color='purple' content='Purple' transparent disabled/></td>
						<td><Button className='hover' color='gray' content='Gray' transparent disabled/></td>
						<td><Button className='hover' color='black' content='Black' transparent disabled/></td>
					</tr>
					<tr>
						<th>active</th>
						<td><Button className='active' content='Text' transparent disabled/></td>
						<td><Button className='active' color='white' content='White' transparent disabled/></td>
						<td><Button className='active' color='red' content='Red' transparent disabled/></td>
						<td><Button className='active' color='orange' content='Orange' transparent disabled/></td>
						<td><Button className='active' color='green' content='Green' transparent disabled/></td>
						<td><Button className='active' color='blue' content='Blue' transparent disabled/></td>
						<td><Button className='active' color='purple' content='Purple' transparent disabled/></td>
						<td><Button className='active' color='gray' content='Gray' transparent disabled/></td>
						<td><Button className='active' color='black' content='Black' transparent disabled/></td>
					</tr>
					<tr>
						<th>focus</th>
						<td><Button className='focus' content='Text' transparent disabled/></td>
						<td><Button className='focus' color='white' content='White' transparent disabled/></td>
						<td><Button className='focus' color='red' content='Red' transparent disabled/></td>
						<td><Button className='focus' color='orange' content='Orange' transparent disabled/></td>
						<td><Button className='focus' color='green' content='Green' transparent disabled/></td>
						<td><Button className='focus' color='blue' content='Blue' transparent disabled/></td>
						<td><Button className='focus' color='purple' content='Purple' transparent disabled/></td>
						<td><Button className='focus' color='gray' content='Gray' transparent disabled/></td>
						<td><Button className='focus' color='black' content='Black' transparent disabled/></td>
					</tr>
					<tr>
						<th>focus active</th>
						<td><Button className='active focus' content='Text' transparent disabled/></td>
						<td><Button className='active focus' color='white' content='White' transparent disabled/></td>
						<td><Button className='active focus' color='red' content='Red' transparent disabled/></td>
						<td><Button className='active focus' color='orange' content='Orange' transparent disabled/></td>
						<td><Button className='active focus' color='green' content='Green' transparent disabled/></td>
						<td><Button className='active focus' color='blue' content='Blue' transparent disabled/></td>
						<td><Button className='active focus' color='purple' content='Purple' transparent disabled/></td>
						<td><Button className='active focus' color='gray' content='Gray' transparent disabled/></td>
						<td><Button className='active focus' color='black' content='Black' transparent disabled/></td>
					</tr>
				</tbody>
			</table>
		</Panel>,
		<Panel shade='high'>
			<table style={{
				textAlign: 'center',
				width: '100%'
			}}>
				<tbody>
					<tr>
						<th></th>
						<td><Button content='Text' transparent disabled/></td>
						<td><Button color='white' content='White' transparent disabled/></td>
						<td><Button color='red' content='Red' transparent disabled/></td>
						<td><Button color='orange' content='Orange' transparent disabled/></td>
						<td><Button color='green' content='Green' transparent disabled/></td>
						<td><Button color='blue' content='Blue' transparent disabled/></td>
						<td><Button color='purple' content='Purple' transparent disabled/></td>
						<td><Button color='gray' content='Gray' transparent disabled/></td>
						<td><Button color='black' content='Black' transparent disabled/></td>
					</tr>
					<tr>
						<th>hover</th>
						<td><Button className='hover' content='Text' transparent disabled/></td>
						<td><Button className='hover' color='white' content='White' transparent disabled/></td>
						<td><Button className='hover' color='red' content='Red' transparent disabled/></td>
						<td><Button className='hover' color='orange' content='Orange' transparent disabled/></td>
						<td><Button className='hover' color='green' content='Green' transparent disabled/></td>
						<td><Button className='hover' color='blue' content='Blue' transparent disabled/></td>
						<td><Button className='hover' color='purple' content='Purple' transparent disabled/></td>
						<td><Button className='hover' color='gray' content='Gray' transparent disabled/></td>
						<td><Button className='hover' color='black' content='Black' transparent disabled/></td>
					</tr>
					<tr>
						<th>active</th>
						<td><Button className='active' content='Text' transparent disabled/></td>
						<td><Button className='active' color='white' content='White' transparent disabled/></td>
						<td><Button className='active' color='red' content='Red' transparent disabled/></td>
						<td><Button className='active' color='orange' content='Orange' transparent disabled/></td>
						<td><Button className='active' color='green' content='Green' transparent disabled/></td>
						<td><Button className='active' color='blue' content='Blue' transparent disabled/></td>
						<td><Button className='active' color='purple' content='Purple' transparent disabled/></td>
						<td><Button className='active' color='gray' content='Gray' transparent disabled/></td>
						<td><Button className='active' color='black' content='Black' transparent disabled/></td>
					</tr>
					<tr>
						<th>focus</th>
						<td><Button className='focus' content='Text' transparent disabled/></td>
						<td><Button className='focus' color='white' content='White' transparent disabled/></td>
						<td><Button className='focus' color='red' content='Red' transparent disabled/></td>
						<td><Button className='focus' color='orange' content='Orange' transparent disabled/></td>
						<td><Button className='focus' color='green' content='Green' transparent disabled/></td>
						<td><Button className='focus' color='blue' content='Blue' transparent disabled/></td>
						<td><Button className='focus' color='purple' content='Purple' transparent disabled/></td>
						<td><Button className='focus' color='gray' content='Gray' transparent disabled/></td>
						<td><Button className='focus' color='black' content='Black' transparent disabled/></td>
					</tr>
					<tr>
						<th>focus active</th>
						<td><Button className='active focus' content='Text' transparent disabled/></td>
						<td><Button className='active focus' color='white' content='White' transparent disabled/></td>
						<td><Button className='active focus' color='red' content='Red' transparent disabled/></td>
						<td><Button className='active focus' color='orange' content='Orange' transparent disabled/></td>
						<td><Button className='active focus' color='green' content='Green' transparent disabled/></td>
						<td><Button className='active focus' color='blue' content='Blue' transparent disabled/></td>
						<td><Button className='active focus' color='purple' content='Purple' transparent disabled/></td>
						<td><Button className='active focus' color='gray' content='Gray' transparent disabled/></td>
						<td><Button className='active focus' color='black' content='Black' transparent disabled/></td>
					</tr>
				</tbody>
			</table>
		</Panel>
	]
};

export const DarkModeDisabled = DivTemplate.bind({});
DarkModeDisabled.args = {
	children: [
		<table style={{
			textAlign: 'center',
			width: '100%'
		}}>
			<tbody>
				<tr>
					<th></th>
					<td><Button content='Text' disabled/></td>
					<td><Button color='white' content='White' disabled/></td>
					<td><Button color='red' content='Red' disabled/></td>
					<td><Button color='orange' content='Orange' disabled/></td>
					<td><Button color='green' content='Green' disabled/></td>
					<td><Button color='blue' content='Blue' disabled/></td>
					<td><Button color='purple' content='Purple' disabled/></td>
					<td><Button color='gray' content='Gray' disabled/></td>
					<td><Button color='black' content='Black' disabled/></td>
				</tr>
				<tr>
					<th>hover</th>
					<td><Button className='hover' content='Text' disabled/></td>
					<td><Button className='hover' color='white' content='White' disabled/></td>
					<td><Button className='hover' color='red' content='Red' disabled/></td>
					<td><Button className='hover' color='orange' content='Orange' disabled/></td>
					<td><Button className='hover' color='green' content='Green' disabled/></td>
					<td><Button className='hover' color='blue' content='Blue' disabled/></td>
					<td><Button className='hover' color='purple' content='Purple' disabled/></td>
					<td><Button className='hover' color='gray' content='Gray' disabled/></td>
					<td><Button className='hover' color='black' content='Black' disabled/></td>
				</tr>
				<tr>
					<th>active</th>
					<td><Button className='active' content='Text' disabled/></td>
					<td><Button className='active' color='white' content='White' disabled/></td>
					<td><Button className='active' color='red' content='Red' disabled/></td>
					<td><Button className='active' color='orange' content='Orange' disabled/></td>
					<td><Button className='active' color='green' content='Green' disabled/></td>
					<td><Button className='active' color='blue' content='Blue' disabled/></td>
					<td><Button className='active' color='purple' content='Purple' disabled/></td>
					<td><Button className='active' color='gray' content='Gray' disabled/></td>
					<td><Button className='active' color='black' content='Black' disabled/></td>
				</tr>
				<tr>
					<th>focus</th>
					<td><Button className='focus' content='Text' disabled/></td>
					<td><Button className='focus' color='white' content='White' disabled/></td>
					<td><Button className='focus' color='red' content='Red' disabled/></td>
					<td><Button className='focus' color='orange' content='Orange' disabled/></td>
					<td><Button className='focus' color='green' content='Green' disabled/></td>
					<td><Button className='focus' color='blue' content='Blue' disabled/></td>
					<td><Button className='focus' color='purple' content='Purple' disabled/></td>
					<td><Button className='focus' color='gray' content='Gray' disabled/></td>
					<td><Button className='focus' color='black' content='Black' disabled/></td>
				</tr>
				<tr>
					<th>focus active</th>
					<td><Button className='active focus' content='Text' disabled/></td>
					<td><Button className='active focus' color='white' content='White' disabled/></td>
					<td><Button className='active focus' color='red' content='Red' disabled/></td>
					<td><Button className='active focus' color='orange' content='Orange' disabled/></td>
					<td><Button className='active focus' color='green' content='Green' disabled/></td>
					<td><Button className='active focus' color='blue' content='Blue' disabled/></td>
					<td><Button className='active focus' color='purple' content='Purple' disabled/></td>
					<td><Button className='active focus' color='gray' content='Gray' disabled/></td>
					<td><Button className='active focus' color='black' content='Black' disabled/></td>
				</tr>
			</tbody>
		</table>,
		<Panel tint='low'>
			<table style={{
				textAlign: 'center',
				width: '100%'
			}}>
				<tbody>
					<tr>
						<th></th>
						<td><Button content='Text' disabled/></td>
						<td><Button color='white' content='White' disabled/></td>
						<td><Button color='red' content='Red' disabled/></td>
						<td><Button color='orange' content='Orange' disabled/></td>
						<td><Button color='green' content='Green' disabled/></td>
						<td><Button color='blue' content='Blue' disabled/></td>
						<td><Button color='purple' content='Purple' disabled/></td>
						<td><Button color='gray' content='Gray' disabled/></td>
						<td><Button color='black' content='Black' disabled/></td>
					</tr>
					<tr>
						<th>hover</th>
						<td><Button className='hover' content='Text' disabled/></td>
						<td><Button className='hover' color='white' content='White' disabled/></td>
						<td><Button className='hover' color='red' content='Red' disabled/></td>
						<td><Button className='hover' color='orange' content='Orange' disabled/></td>
						<td><Button className='hover' color='green' content='Green' disabled/></td>
						<td><Button className='hover' color='blue' content='Blue' disabled/></td>
						<td><Button className='hover' color='purple' content='Purple' disabled/></td>
						<td><Button className='hover' color='gray' content='Gray' disabled/></td>
						<td><Button className='hover' color='black' content='Black' disabled/></td>
					</tr>
					<tr>
						<th>active</th>
						<td><Button className='active' content='Text' disabled/></td>
						<td><Button className='active' color='white' content='White' disabled/></td>
						<td><Button className='active' color='red' content='Red' disabled/></td>
						<td><Button className='active' color='orange' content='Orange' disabled/></td>
						<td><Button className='active' color='green' content='Green' disabled/></td>
						<td><Button className='active' color='blue' content='Blue' disabled/></td>
						<td><Button className='active' color='purple' content='Purple' disabled/></td>
						<td><Button className='active' color='gray' content='Gray' disabled/></td>
						<td><Button className='active' color='black' content='Black' disabled/></td>
					</tr>
					<tr>
						<th>focus</th>
						<td><Button className='focus' content='Text' disabled/></td>
						<td><Button className='focus' color='white' content='White' disabled/></td>
						<td><Button className='focus' color='red' content='Red' disabled/></td>
						<td><Button className='focus' color='orange' content='Orange' disabled/></td>
						<td><Button className='focus' color='green' content='Green' disabled/></td>
						<td><Button className='focus' color='blue' content='Blue' disabled/></td>
						<td><Button className='focus' color='purple' content='Purple' disabled/></td>
						<td><Button className='focus' color='gray' content='Gray' disabled/></td>
						<td><Button className='focus' color='black' content='Black' disabled/></td>
					</tr>
					<tr>
						<th>focus active</th>
						<td><Button className='active focus' content='Text' disabled/></td>
						<td><Button className='active focus' color='white' content='White' disabled/></td>
						<td><Button className='active focus' color='red' content='Red' disabled/></td>
						<td><Button className='active focus' color='orange' content='Orange' disabled/></td>
						<td><Button className='active focus' color='green' content='Green' disabled/></td>
						<td><Button className='active focus' color='blue' content='Blue' disabled/></td>
						<td><Button className='active focus' color='purple' content='Purple' disabled/></td>
						<td><Button className='active focus' color='gray' content='Gray' disabled/></td>
						<td><Button className='active focus' color='black' content='Black' disabled/></td>
					</tr>
				</tbody>
			</table>
		</Panel>,
		<Panel tint='high'>
			<table style={{
				textAlign: 'center',
				width: '100%'
			}}>
				<tbody>
					<tr>
						<th></th>
						<td><Button content='Text' disabled/></td>
						<td><Button color='white' content='White' disabled/></td>
						<td><Button color='red' content='Red' disabled/></td>
						<td><Button color='orange' content='Orange' disabled/></td>
						<td><Button color='green' content='Green' disabled/></td>
						<td><Button color='blue' content='Blue' disabled/></td>
						<td><Button color='purple' content='Purple' disabled/></td>
						<td><Button color='gray' content='Gray' disabled/></td>
						<td><Button color='black' content='Black' disabled/></td>
					</tr>
					<tr>
						<th>hover</th>
						<td><Button className='hover' content='Text' disabled/></td>
						<td><Button className='hover' color='white' content='White' disabled/></td>
						<td><Button className='hover' color='red' content='Red' disabled/></td>
						<td><Button className='hover' color='orange' content='Orange' disabled/></td>
						<td><Button className='hover' color='green' content='Green' disabled/></td>
						<td><Button className='hover' color='blue' content='Blue' disabled/></td>
						<td><Button className='hover' color='purple' content='Purple' disabled/></td>
						<td><Button className='hover' color='gray' content='Gray' disabled/></td>
						<td><Button className='hover' color='black' content='Black' disabled/></td>
					</tr>
					<tr>
						<th>active</th>
						<td><Button className='active' content='Text' disabled/></td>
						<td><Button className='active' color='white' content='White' disabled/></td>
						<td><Button className='active' color='red' content='Red' disabled/></td>
						<td><Button className='active' color='orange' content='Orange' disabled/></td>
						<td><Button className='active' color='green' content='Green' disabled/></td>
						<td><Button className='active' color='blue' content='Blue' disabled/></td>
						<td><Button className='active' color='purple' content='Purple' disabled/></td>
						<td><Button className='active' color='gray' content='Gray' disabled/></td>
						<td><Button className='active' color='black' content='Black' disabled/></td>
					</tr>
					<tr>
						<th>focus</th>
						<td><Button className='focus' content='Text' disabled/></td>
						<td><Button className='focus' color='white' content='White' disabled/></td>
						<td><Button className='focus' color='red' content='Red' disabled/></td>
						<td><Button className='focus' color='orange' content='Orange' disabled/></td>
						<td><Button className='focus' color='green' content='Green' disabled/></td>
						<td><Button className='focus' color='blue' content='Blue' disabled/></td>
						<td><Button className='focus' color='purple' content='Purple' disabled/></td>
						<td><Button className='focus' color='gray' content='Gray' disabled/></td>
						<td><Button className='focus' color='black' content='Black' disabled/></td>
					</tr>
					<tr>
						<th>focus active</th>
						<td><Button className='active focus' content='Text' disabled/></td>
						<td><Button className='active focus' color='white' content='White' disabled/></td>
						<td><Button className='active focus' color='red' content='Red' disabled/></td>
						<td><Button className='active focus' color='orange' content='Orange' disabled/></td>
						<td><Button className='active focus' color='green' content='Green' disabled/></td>
						<td><Button className='active focus' color='blue' content='Blue' disabled/></td>
						<td><Button className='active focus' color='purple' content='Purple' disabled/></td>
						<td><Button className='active focus' color='gray' content='Gray' disabled/></td>
						<td><Button className='active focus' color='black' content='Black' disabled/></td>
					</tr>
				</tbody>
			</table>
		</Panel>
	],
	className: 'enonic dark-theme',
	style: {
		padding: '20px 30px'
	}
};

export const DarkModeTransparentDisabled = DivTemplate.bind({});
DarkModeTransparentDisabled.args = {
	children: [
		<table style={{
			textAlign: 'center',
			width: '100%'
		}}>
			<tbody>
				<tr>
					<th></th>
					<td><Button content='Text' transparent disabled/></td>
					<td><Button color='white' content='White' transparent disabled/></td>
					<td><Button color='red' content='Red' transparent disabled/></td>
					<td><Button color='orange' content='Orange' transparent disabled/></td>
					<td><Button color='green' content='Green' transparent disabled/></td>
					<td><Button color='blue' content='Blue' transparent disabled/></td>
					<td><Button color='purple' content='Purple' transparent disabled/></td>
					<td><Button color='gray' content='Gray' transparent disabled/></td>
					<td><Button color='black' content='Black' transparent disabled/></td>
				</tr>
				<tr>
					<th>hover</th>
					<td><Button className='hover' content='Text' transparent disabled/></td>
					<td><Button className='hover' color='white' content='White' transparent disabled/></td>
					<td><Button className='hover' color='red' content='Red' transparent disabled/></td>
					<td><Button className='hover' color='orange' content='Orange' transparent disabled/></td>
					<td><Button className='hover' color='green' content='Green' transparent disabled/></td>
					<td><Button className='hover' color='blue' content='Blue' transparent disabled/></td>
					<td><Button className='hover' color='purple' content='Purple' transparent disabled/></td>
					<td><Button className='hover' color='gray' content='Gray' transparent disabled/></td>
					<td><Button className='hover' color='black' content='Black' transparent disabled/></td>
				</tr>
				<tr>
					<th>active</th>
					<td><Button className='active' content='Text' transparent disabled/></td>
					<td><Button className='active' color='white' content='White' transparent disabled/></td>
					<td><Button className='active' color='red' content='Red' transparent disabled/></td>
					<td><Button className='active' color='orange' content='Orange' transparent disabled/></td>
					<td><Button className='active' color='green' content='Green' transparent disabled/></td>
					<td><Button className='active' color='blue' content='Blue' transparent disabled/></td>
					<td><Button className='active' color='purple' content='Purple' transparent disabled/></td>
					<td><Button className='active' color='gray' content='Gray' transparent disabled/></td>
					<td><Button className='active' color='black' content='Black' transparent disabled/></td>
				</tr>
				<tr>
					<th>focus</th>
					<td><Button className='focus' content='Text' transparent disabled/></td>
					<td><Button className='focus' color='white' content='White' transparent disabled/></td>
					<td><Button className='focus' color='red' content='Red' transparent disabled/></td>
					<td><Button className='focus' color='orange' content='Orange' transparent disabled/></td>
					<td><Button className='focus' color='green' content='Green' transparent disabled/></td>
					<td><Button className='focus' color='blue' content='Blue' transparent disabled/></td>
					<td><Button className='focus' color='purple' content='Purple' transparent disabled/></td>
					<td><Button className='focus' color='gray' content='Gray' transparent disabled/></td>
					<td><Button className='focus' color='black' content='Black' transparent disabled/></td>
				</tr>
				<tr>
					<th>focus active</th>
					<td><Button className='active focus' content='Text' transparent disabled/></td>
					<td><Button className='active focus' color='white' content='White' transparent disabled/></td>
					<td><Button className='active focus' color='red' content='Red' transparent disabled/></td>
					<td><Button className='active focus' color='orange' content='Orange' transparent disabled/></td>
					<td><Button className='active focus' color='green' content='Green' transparent disabled/></td>
					<td><Button className='active focus' color='blue' content='Blue' transparent disabled/></td>
					<td><Button className='active focus' color='purple' content='Purple' transparent disabled/></td>
					<td><Button className='active focus' color='gray' content='Gray' transparent disabled/></td>
					<td><Button className='active focus' color='black' content='Black' transparent disabled/></td>
				</tr>
			</tbody>
		</table>,
		<Panel tint='low'>
			<table style={{
				textAlign: 'center',
				width: '100%'
			}}>
				<tbody>
					<tr>
						<th></th>
						<td><Button content='Text' transparent disabled/></td>
						<td><Button color='white' content='White' transparent disabled/></td>
						<td><Button color='red' content='Red' transparent disabled/></td>
						<td><Button color='orange' content='Orange' transparent disabled/></td>
						<td><Button color='green' content='Green' transparent disabled/></td>
						<td><Button color='blue' content='Blue' transparent disabled/></td>
						<td><Button color='purple' content='Purple' transparent disabled/></td>
						<td><Button color='gray' content='Gray' transparent disabled/></td>
						<td><Button color='black' content='Black' transparent disabled/></td>
					</tr>
					<tr>
						<th>hover</th>
						<td><Button className='hover' content='Text' transparent disabled/></td>
						<td><Button className='hover' color='white' content='White' transparent disabled/></td>
						<td><Button className='hover' color='red' content='Red' transparent disabled/></td>
						<td><Button className='hover' color='orange' content='Orange' transparent disabled/></td>
						<td><Button className='hover' color='green' content='Green' transparent disabled/></td>
						<td><Button className='hover' color='blue' content='Blue' transparent disabled/></td>
						<td><Button className='hover' color='purple' content='Purple' transparent disabled/></td>
						<td><Button className='hover' color='gray' content='Gray' transparent disabled/></td>
						<td><Button className='hover' color='black' content='Black' transparent disabled/></td>
					</tr>
					<tr>
						<th>active</th>
						<td><Button className='active' content='Text' transparent disabled/></td>
						<td><Button className='active' color='white' content='White' transparent disabled/></td>
						<td><Button className='active' color='red' content='Red' transparent disabled/></td>
						<td><Button className='active' color='orange' content='Orange' transparent disabled/></td>
						<td><Button className='active' color='green' content='Green' transparent disabled/></td>
						<td><Button className='active' color='blue' content='Blue' transparent disabled/></td>
						<td><Button className='active' color='purple' content='Purple' transparent disabled/></td>
						<td><Button className='active' color='gray' content='Gray' transparent disabled/></td>
						<td><Button className='active' color='black' content='Black' transparent disabled/></td>
					</tr>
					<tr>
						<th>focus</th>
						<td><Button className='focus' content='Text' transparent disabled/></td>
						<td><Button className='focus' color='white' content='White' transparent disabled/></td>
						<td><Button className='focus' color='red' content='Red' transparent disabled/></td>
						<td><Button className='focus' color='orange' content='Orange' transparent disabled/></td>
						<td><Button className='focus' color='green' content='Green' transparent disabled/></td>
						<td><Button className='focus' color='blue' content='Blue' transparent disabled/></td>
						<td><Button className='focus' color='purple' content='Purple' transparent disabled/></td>
						<td><Button className='focus' color='gray' content='Gray' transparent disabled/></td>
						<td><Button className='focus' color='black' content='Black' transparent disabled/></td>
					</tr>
					<tr>
						<th>focus active</th>
						<td><Button className='active focus' content='Text' transparent disabled/></td>
						<td><Button className='active focus' color='white' content='White' transparent disabled/></td>
						<td><Button className='active focus' color='red' content='Red' transparent disabled/></td>
						<td><Button className='active focus' color='orange' content='Orange' transparent disabled/></td>
						<td><Button className='active focus' color='green' content='Green' transparent disabled/></td>
						<td><Button className='active focus' color='blue' content='Blue' transparent disabled/></td>
						<td><Button className='active focus' color='purple' content='Purple' transparent disabled/></td>
						<td><Button className='active focus' color='gray' content='Gray' transparent disabled/></td>
						<td><Button className='active focus' color='black' content='Black' transparent disabled/></td>
					</tr>
				</tbody>
			</table>
		</Panel>,
		<Panel tint='high'>
			<table style={{
				textAlign: 'center',
				width: '100%'
			}}>
				<tbody>
					<tr>
						<th></th>
						<td><Button content='Text' transparent disabled/></td>
						<td><Button color='white' content='White' transparent disabled/></td>
						<td><Button color='red' content='Red' transparent disabled/></td>
						<td><Button color='orange' content='Orange' transparent disabled/></td>
						<td><Button color='green' content='Green' transparent disabled/></td>
						<td><Button color='blue' content='Blue' transparent disabled/></td>
						<td><Button color='purple' content='Purple' transparent disabled/></td>
						<td><Button color='gray' content='Gray' transparent disabled/></td>
						<td><Button color='black' content='Black' transparent disabled/></td>
					</tr>
					<tr>
						<th>hover</th>
						<td><Button className='hover' content='Text' transparent disabled/></td>
						<td><Button className='hover' color='white' content='White' transparent disabled/></td>
						<td><Button className='hover' color='red' content='Red' transparent disabled/></td>
						<td><Button className='hover' color='orange' content='Orange' transparent disabled/></td>
						<td><Button className='hover' color='green' content='Green' transparent disabled/></td>
						<td><Button className='hover' color='blue' content='Blue' transparent disabled/></td>
						<td><Button className='hover' color='purple' content='Purple' transparent disabled/></td>
						<td><Button className='hover' color='gray' content='Gray' transparent disabled/></td>
						<td><Button className='hover' color='black' content='Black' transparent disabled/></td>
					</tr>
					<tr>
						<th>active</th>
						<td><Button className='active' content='Text' transparent disabled/></td>
						<td><Button className='active' color='white' content='White' transparent disabled/></td>
						<td><Button className='active' color='red' content='Red' transparent disabled/></td>
						<td><Button className='active' color='orange' content='Orange' transparent disabled/></td>
						<td><Button className='active' color='green' content='Green' transparent disabled/></td>
						<td><Button className='active' color='blue' content='Blue' transparent disabled/></td>
						<td><Button className='active' color='purple' content='Purple' transparent disabled/></td>
						<td><Button className='active' color='gray' content='Gray' transparent disabled/></td>
						<td><Button className='active' color='black' content='Black' transparent disabled/></td>
					</tr>
					<tr>
						<th>focus</th>
						<td><Button className='focus' content='Text' transparent disabled/></td>
						<td><Button className='focus' color='white' content='White' transparent disabled/></td>
						<td><Button className='focus' color='red' content='Red' transparent disabled/></td>
						<td><Button className='focus' color='orange' content='Orange' transparent disabled/></td>
						<td><Button className='focus' color='green' content='Green' transparent disabled/></td>
						<td><Button className='focus' color='blue' content='Blue' transparent disabled/></td>
						<td><Button className='focus' color='purple' content='Purple' transparent disabled/></td>
						<td><Button className='focus' color='gray' content='Gray' transparent disabled/></td>
						<td><Button className='focus' color='black' content='Black' transparent disabled/></td>
					</tr>
					<tr>
						<th>focus active</th>
						<td><Button className='active focus' content='Text' transparent disabled/></td>
						<td><Button className='active focus' color='white' content='White' transparent disabled/></td>
						<td><Button className='active focus' color='red' content='Red' transparent disabled/></td>
						<td><Button className='active focus' color='orange' content='Orange' transparent disabled/></td>
						<td><Button className='active focus' color='green' content='Green' transparent disabled/></td>
						<td><Button className='active focus' color='blue' content='Blue' transparent disabled/></td>
						<td><Button className='active focus' color='purple' content='Purple' transparent disabled/></td>
						<td><Button className='active focus' color='gray' content='Gray' transparent disabled/></td>
						<td><Button className='active focus' color='black' content='Black' transparent disabled/></td>
					</tr>
				</tbody>
			</table>
		</Panel>
	],
	className: 'enonic dark-theme',
	style: {
		padding: '20px 30px'
	}
};

export const Primary = ButtonTemplate.bind({});
Primary.args = {
	children: 'Change password',
	primary: true,
};

export const Input = ButtonTemplate.bind({});
Input.args = {
	as: 'input',
	value: 'Input Button',
};
