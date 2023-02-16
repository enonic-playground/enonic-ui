import { Footer } from '../../components/Footer';


export default {
	title: 'Semantic/Footer',
	component: Footer
};

const Template = (args) => <Footer {...args} />;

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
