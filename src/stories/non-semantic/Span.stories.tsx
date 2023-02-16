import { Span } from '../../components/Span';


export default {
	title: 'Non-Semantic/Span',
	component: Span
};

const Template = (args) => <Span {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	children: 'Bla bla bla'
};
