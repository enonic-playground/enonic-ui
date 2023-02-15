import { Article } from '../../components/Article.tsx';


export default {
	title: 'Semantic/Article',
	component: Article
};

const Template = (args) => <Article {...args} />;

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
