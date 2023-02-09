import type { StrictBarProps } from '../../components/bar/bar.d';
import React from 'react';
import { Bar } from '../../components/bar/Bar.tsx';
import { Button } from '../../components/button/Button.tsx';

export default {
	title: 'Modules/Bar/Bar',
	component: Bar,
	argTypes: {
		shade: {
			description: 'Affects light-theme only',
			options: ['none', 'low', 'high'],
			required: false,
		},
		tint: {
			description: 'Affects dark-theme only',
			options: ['none', 'low', 'high'],
			required: false,
		}
	},
};

const BarTemplate = (args: StrictBarProps, { globals }) => {
	return globals && globals.backgrounds && globals.backgrounds.value === '#212121'
		? <div className='dark-theme'><Bar {...args} /></div>
		: <Bar {...args} />;
}

const DivTemplate = (args: React.HTMLAttributes<HTMLElement>) => <div {...args} />;

export const Default = BarTemplate.bind({});
Default.args = {
	children: [
		<Button>One</Button>,
		<Button>Two</Button>,
		<Button>Three</Button>,
	],
};

export const HighShade = BarTemplate.bind({});
HighShade.args = {
	children: [
		<Button>One</Button>,
		<Button>Two</Button>,
		<Button>Three</Button>,
	],
	shade: 'high',
};

export const VerticalAlign = BarTemplate.bind({});
VerticalAlign.args = {
	children: [
		<Button>None</Button>,
		<Bar.Item verticalAlign='bottom'>
			<Button>Bottom</Button>
		</Bar.Item>,
		<Bar.Item verticalAlign='middle'>
			<Button>Middle</Button>
		</Bar.Item>,
		<Bar.Item verticalAlign='top'>
			<Button>Top</Button>
		</Bar.Item>
	],
	style: {
		height: '44px'
	}
};

export const LightTheme = DivTemplate.bind({});
LightTheme.args = {
	children: [
		<Bar>
			<Button>One</Button>
			<Button>Two</Button>
			<Button>Three</Button>
		</Bar>
	],
	className: 'light-theme'
}

export const DarkTheme = DivTemplate.bind({});
DarkTheme.args = {
	children: [
		<Bar>
			<Button>One</Button>
			<Button>Two</Button>
			<Button>Three</Button>
		</Bar>
	],
	className: 'dark-theme'
}
