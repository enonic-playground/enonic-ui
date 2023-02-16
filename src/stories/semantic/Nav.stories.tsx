import { Nav } from '../../components/Nav';


export default {
	title: 'Semantic/Nav',
	component: Nav
};

const Template = (args) => <Nav {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	children: 'Bla bla bla'
};

export const LowShade = Template.bind({});
LowShade.args = {
	children: 'Bla bla bla',
	shade: 'low'
};

export const HighShade = Template.bind({});
HighShade.args = {
	children: 'Bla bla bla',
	shade: 'high'
};
