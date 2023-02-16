import { Icon } from '../components/icons/Icon';
import { iconNames } from '../components/icons/iconNames';

export default {
	title: 'Elements/Icon',
	component: Icon,
};

const IconTemplate = (args) => <Icon {...args} />;
const DivTemplate = (args) => <div {...args} />;


export const UsersSmall = IconTemplate.bind({});
UsersSmall.args = {
	name: 'search'
};


export const Sizes = DivTemplate.bind({});
Sizes.args = {
	children: [
		<Icon name='search' size='mini'/>,
		<Icon name='search' size='tiny'/>,
		<Icon name='search' size='small'/>,
		<Icon name='search'/>,
		<Icon name='search' size='large'/>,
		<Icon name='search' size='big'/>,
		<Icon name='search' size='huge'/>,
		<Icon name='search' size='massive'/>,
	]
};

export const Colors = DivTemplate.bind({});
Colors.args = {
	children: [
		<Icon name='search'/>,
		<Icon color='white' name='search'/>,
		<Icon color='red' name='search'/>,
		<Icon color='orange' name='search'/>,
		<Icon color='green' name='search'/>,
		<Icon color='blue' name='search'/>,
		<Icon color='purple' name='search'/>,
		<Icon color='black' name='search'/>,
	]
};

export const DarkMode = DivTemplate.bind({});
DarkMode.args = {
	children: [
		<Icon name='search'/>,
		<Icon color='white' name='search'/>,
		<Icon color='red' name='search'/>,
		<Icon color='orange' name='search'/>,
		<Icon color='green' name='search'/>,
		<Icon color='blue' name='search'/>,
		<Icon color='purple' name='search'/>,
		<Icon color='black' name='search'/>,
	],
	className: 'dark-theme',
	style: {
		padding: '20px 30px'
	}
};

export const Names = DivTemplate.bind({});
Names.args = {
	children: iconNames.map(name =><Icon name={name}/>),
};
