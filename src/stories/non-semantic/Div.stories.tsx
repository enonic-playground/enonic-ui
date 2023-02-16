import { Div } from '../../components/Div';


export default {
	title: 'Non-Semantic/Div',
	component: Div
};

const Template = (args) => <Div {...args} />;

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
