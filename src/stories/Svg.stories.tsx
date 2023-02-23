import { Svg } from '../components/Svg';

export default {
	title: 'Elements/Svg',
	component: Svg,
};

const SvgTemplate = (args) => <Svg {...args} />;
const DivTemplate = (args) => <div {...args} />;


export const UsersSmall = SvgTemplate.bind({});
UsersSmall.args = {
	name: 'users_404x404'
};

export const UsersBig = SvgTemplate.bind({});
UsersBig.args = {
	name: 'users_512x464'
};

export const Names = DivTemplate.bind({});
Names.args = {
	children: [
		<Svg name='users_404x404'/>,
		<Svg name='users_512x464'/>,
	]
};


export const Colors = DivTemplate.bind({});
Colors.args = {
	children: [
		<Svg name='users_404x404'/>,
		<Svg color='white' name='users_404x404'/>,
		<Svg color='red' name='users_404x404'/>,
		<Svg color='orange' name='users_404x404'/>,
		<Svg color='green' name='users_404x404'/>,
		<Svg color='blue' name='users_404x404'/>,
		<Svg color='purple' name='users_404x404'/>,
		<Svg color='black' name='users_404x404'/>,
	]
};

export const DarkMode = DivTemplate.bind({});
DarkMode.args = {
	children: [
		<Svg name='users_404x404'/>,
		<Svg color='white' name='users_404x404'/>,
		<Svg color='red' name='users_404x404'/>,
		<Svg color='orange' name='users_404x404'/>,
		<Svg color='green' name='users_404x404'/>,
		<Svg color='blue' name='users_404x404'/>,
		<Svg color='purple' name='users_404x404'/>,
		<Svg color='black' name='users_404x404'/>,
	],
	className: 'enonic dark-theme',
	style: {
		padding: '20px 30px'
	}
};
