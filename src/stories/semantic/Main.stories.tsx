import { Main } from '../../components/Main.tsx';


export default {
	title: 'Semantic/Main',
	component: Main
};

const Template = (args) => <Main {...args} />;

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
